import React, { useState, useEffect } from "react";
import bibtexParse from 'bibtex-parser-js';

interface BibEntry {
  ENTRYTYPE: string;
  TITLE?: string;
  AUTHOR?: string;
  journal?: string;
  volume?: string;
  pages?: string;
  year?: string;
  doi?: string;
  [key: string]: any;
}

interface BibtexParserProps {
  bibtexSources: string[]; // Accept an array of BibTeX strings
  special?: string
}


function formatPages(pages: string | undefined): JSX.Element | null {
    // Check if pages is provided and is a non-empty string
    if (pages && pages.length > 0) {
        // Check for common page range separators
        const pageRangeRegex = /--|-|–|â€“/; // RegEx to match various dash types
        if (pageRangeRegex.test(pages)) {
            const pag = pages.split(pageRangeRegex).map(p => p.trim());
            const begin = pag[0];
            const end = pag[1];

            // Return formatted JSX
            return (
                <>
                    ,&nbsp;<span property="schema:pageBegin">{begin}</span>-<span property="schema:pageEnd">{end}</span>
                </>
            );
        } else if (/^\d+(-\d+)?$/.test(pages)) {
            // If pages is a single numeric range, return it directly
            return (
                <>
                ,&nbsp;<span property="schema:pageBegin">{pages}</span>
                </>
            );
        } else {
            // Handle non-numeric page info
            console.warn(`Non-numeric page information detected ('${pages}'). Treating as missing.`);
            return null; // Return null if invalid
        }
    } else {
        console.warn("Sorry, no page information.");
        return null; // Return null if no page info
    }
}


export const BibtexParser: React.FC<BibtexParserProps> = ({ bibtexSources , special}) => {
  const [parsedEntries, setParsedEntries] = useState<BibEntry[]>([]);

  useEffect(() => {

    try {
      const allEntries: BibEntry[] = [];
      bibtexSources.forEach((bibtex) => {
        const parsed = bibtexParse.toJSON(bibtex);
        allEntries.push(...parsed);
      });
      setParsedEntries(allEntries);
    } catch (error) {
      alert("An error occurred while parsing the BibTeX entries. Please check the format." + bibtexSources);
    }
  }, [bibtexSources]);
  const formatAuthors = (authors: string): string => {

    const cleanedAuthors = authors
        .replace(/\s*and\s*/g, "|") 
        .replace(/\{|\}/g, "")      
        .trim();
    
    const authorList = cleanedAuthors.split("|").map(author => author.trim());

    const maxAuthors = 7;

    const formattedAuthors = authorList.map((author) => {


        const [last, firstNames] = author.includes(",") ? 
            author.split(",").map(part => part.trim()) :
            ['', author]; 

        const initials = firstNames.split(' ').map(n => n[0] + '.').join(' '); 

        const formattedName = `${last}, ${initials}`.trim(); 

        return formattedName;
    });
    const output = formattedAuthors.slice(0, maxAuthors).join('; ') + 
                   (formattedAuthors.length > maxAuthors ? ' et al.' : '');
    
    
      return output;
    
    
};



  let specialthing = "";

  if (special) {
    specialthing = `#${special}`; 
  }

  // Helper function to render individual citations based on their type
  const renderCitation = (entry: BibEntry, index: number) => {
   // console.log(`Rendering citation for entry #${index + 1}: `, entry);
    
    // Use the index as citation number
    const citationNumber = index + 1; 
    const entryType = entry.entryType.toLowerCase(); // Convert to lowercase for consistent comparison
    const entryTags = entry.entryTags; // Adjust based on your data structure
   // console.log("Entry Tags: ", entryTags);

    switch (entryType) {
      case "article":
        return (
          <li key={index} typeof="schema:ScholarlyArticle" role="doc-biblioentry" property="schema:citation" id={`desc-${citationNumber}${specialthing}`}>
            {/* Citation number as comment */}
            {/*<!-- Citation num ${citationNumber} --> */}
            {formatAuthors(entryTags.AUTHOR || entryTags.EDITOR || "")}
            &nbsp;<span property="schema:name">{entryTags.TITLE.replace(/[?!.]/g, '').replace(/\n/g, ' ').trim()}.</span>
            &nbsp;<i property="schema:publisher" typeof="schema:Organization">{entryTags.JOURNAL}</i>
            &nbsp;<b property="issueNumber" typeof="PublicationIssue">{entryTags.VOLUME}</b>
            {formatPages(entryTags.PAGES) && <span>{formatPages(entryTags.PAGES)}</span>}
            {entryTags.YEAR && (
              <span>&nbsp;(<time property="schema:datePublished" datatype="xsd:gYear" dateTime={entryTags.YEAR}>{entryTags.YEAR}</time>).</span>
            )}
            {entryTags.DOI && (
              <span>&nbsp;<a className="doi" href={`https://doi.org/${entryTags.DOI}`}>doi: {entryTags.DOI}</a></span>
            )}
          </li>
        );

      case "book":
        return (
          <li key={index} typeof="schema:Book" role="doc-biblioentry" property="schema:citation" id={`desc-${citationNumber}`}>
           
            {formatAuthors(entryTags.AUTHOR || entryTags.EDITOR || "No author")}
           
            {entryTags.TITLE ? (
              <span property="schema:name">&nbsp;{entryTags.TITLE.replace(/[?!.]/g, '').replace(/\n/g, ' ').trim()}.</span>
            ) : entryTags.BOOKTITLE ? (
              <span property="schema:name">&nbsp;{entryTags.BOOKTITLE.replace(/[?!.]/g, '').replace(/\n/g, ' ').trim()}.</span>
            ) : (
              <span property="schema:name">No title</span>

            )}
           
            {entryTags.PUBLISHER && (
              <i property="schema:publisher" typeof="schema:Organization">
                &nbsp;{entryTags.PUBLISHER}
              </i>
            )}
           
            {entryTags.YEAR && (
              <span>
                &nbsp;(<time property="schema:datePublished" datatype="xsd:gYear" dateTime={entryTags.YEAR}>
                  {entryTags.YEAR}
                </time>).
              </span>
            )}
            {entryTags.ISBN && (
              <span property="isbn">&nbsp;{entryTags.ISBN}</span>
            )
            }
          </li>
        );

      case "misc":
        return (
          <li key={index} typeof="schema:WebPage" role="doc-biblioentry" property="schema:citation" id={`desc-${citationNumber}`}>
            {/* Render authors */}
            {(entryTags.AUTHOR || entryTags.EDITOR || "")}
            {/* Render title */}
            {entryTags.TITLE && (
              <span property="schema:name">.&nbsp;{entryTags.TITLE.replace(/[?!.]/g, '').replace(/\n/g, ' ').trim()}.</span>
            )}
            {/* Render howpublished */}
            {entryTags.HOWPUBLISHED && (
              <i property="schema:publisher" typeof="schema:Organization">&nbsp;{entryTags.HOWPUBLISHED}</i>
            )}
            {/* Render year */}
            {entryTags.YEAR && (
              <span>&nbsp;(<time property="schema:datePublished" datatype="xsd:gYear" dateTime={entryTags.YEAR}>{entryTags.YEAR}</time>).</span>
            )}
          </li>
        );

      // Handle additional entry types here
      case "inproceedings":
        return (
          <li key={index}>
            <span>{formatAuthors(entryTags.AUTHOR || "")}</span>&nbsp;
            <span>{entryTags.TITLE}</span>. In <i>{entryTags.BOOKTITLE}</i>,&nbsp;
            <b>{entryTags.editor}</b>, {entryTags.YEAR}.
          </li>
        );

      case "phdthesis":
        return (
          <li key={index}>
            <span>{formatAuthors(entryTags.AUTHOR || "")}</span>&nbsp;
            <span>{entryTags.TITLE}</span>, PhD thesis, {entryTags.SCHOOL}, {entryTags.YEAR}.
          </li>
        );

      default:
        console.warn(`Unknown entry type: ${entryType}`);
        return <li key={index}>Unknown entry type: {entryType}</li>;
    }
  };

  return (
    <div>
      {parsedEntries.length === 0 ? (
        <p>No citations available.</p>
      ) : (
        <ol>
          {parsedEntries.map((entry, index) => renderCitation(entry, index))}
        </ol>
      )}
    </div>
  );
};

export default BibtexParser;
