# AGENTS

## Project purpose
- This repository quickly generates customized versions of Tomás Goizueta’s résumé by applying small adjustments to the content for each job posting. Agents must be able to read a job description, extract the relevant requirements, and adapt the CV data (for example, highlighting the skills, achievements, and experiences that are most aligned) without changing the main structure.
- The CV is delivered as a web application that is then manually exported to PDF. For this reason, **all JSX/HTML must be semantically correct** (appropriate tags, logical hierarchy, and accessible attributes). This helps AI/LLMs that review CVs understand each section and its relevance accurately.

## Notes for agents
- Keep all text truthful; adjustments should be limited to reordering or emphasizing existing information to better fit each job posting.
- Avoid duplicating data across sections; shared information lives in `src/data/common.json` and localized content in `src/data/resume-es.json` and `src/data/resume-en.json`.
- After editing, run `npm run build` to verify that the exportable version renders correctly.

## Your task (Command !cv)
When I provide you with a job offer and use the !cv command, you must:
1. Using resume-es/resume-en as template depending of the language of the offer. Analyze the job description to identify key skills, experiences, and qualifications required. For example, if the job emphasizes knowleadge of design patterns and user experience, modify slightly the "Education" and "Experience" sections, adding/modifying the summary of Babel/Bachelors/ Bootcamp entries to highlight these aspects. For example, I studied design patterns in depth during my Bachelor's degree, so you could add that to the summary of that entry. But do not invent new information; only reorder and rephrase existing content. In point 2 below, you will find more details about the extra information you can use to adapt my CV. Only add summary to 1 or 2 entries maximum, short and concise.
2. In info.md you will find an extensive list of my skills, experiences, and other relevant information. You will use this extra information to adapt my CV to the job description provided. Focus on reordering and emphasizing existing content rather than adding new information.
3. Try to keep the information true to reality; do not invent new experiences or skills. Focus on rephrasing and reordering existing content to better match the job requirements. For example, do not add leadership skills if I have never held a leadership position.
4. You will select some technologies (Programming Languages, Frameworks, Libraries, Tools, Platforms, etc.) from the extra information in info.md that are relevant to the job description and add them to a new "Technologies" skill entry in the "Skills" section of the CV. This skills should be a concise list of keywords (e.g., "JavaScript, React, Node.js, AWS") that are ordered by relevance to the job description and my level of expertise. Add a maximum of 8-10 technologies. 
5. You will generate a new version of the CV data in JSON format with file name of the company and the job title, following the structure of `src/data/resume-en.json` or `src/data/resume-es.json`, depending on the language specified. You will write the CV in the language of the job description (English or Spanish).
6. Ensure that the JSON structure remains valid and consistent with the original format (resume-en.json or resume-es.json).
7. You will use this new JSON as the source to generate the CV web application. Instead of using the default `resume-en.json` or `resume-es.json`, you will use the newly created JSON file to render the CV web application.