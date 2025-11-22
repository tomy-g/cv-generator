# AGENTS

## Project purpose
- This repository quickly generates customized versions of Tomás Goizueta’s résumé by applying small adjustments to the content for each job posting. Agents must be able to read a job description, extract the relevant requirements, and adapt the CV data (for example, highlighting the skills, achievements, and experiences that are most aligned) without changing the main structure.
- The CV is delivered as a web application that is then manually exported to PDF. For this reason, **all JSX/HTML must be semantically correct** (appropriate tags, logical hierarchy, and accessible attributes). This helps AI/LLMs that review CVs understand each section and its relevance accurately.

## Notes for agents
- Keep all text truthful; adjustments should be limited to reordering or emphasizing existing information to better fit each job posting.
- Avoid duplicating data across sections; shared information lives in `src/data/common.json` and localized content in `src/data/resume-es.json` and `src/data/resume-en.json`.
- After editing, run `npm run build` to verify that the exportable version renders correctly.
