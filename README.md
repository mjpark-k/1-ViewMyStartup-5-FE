# 1-ViewMyStartup-5-FE
[팀 협업 문서 링크](https://www.notion.so/01cfaff9d9714af3a4efc36e6c2e7b3c?v=6af144344def49b08b4a356710c46dbc)

# 팀원 구성

- 김민수(https://github.com/Minsugar98)
- 박명준(https://github.com/mjpark-k)
- 박시연(https://github.com/choco-lic)
- 안재민(https://github.com/mini-1018)

# 프로젝트 소개
- 스타트업 정보 확인 및 모의 투자 서비스 사이트 제작
- 프로젝트 기간: 2024. 08. 13(화) ~ 2024. 09. 03(수)

# 기술 스택
- **FrontEnd**  
![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white) ![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white)
- BackEnd   
![](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)![](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
- Database   
![](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)
- 공통 Tool   
![](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)![](	https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white)![](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)

# 팀원별 구현 기능 상세
### 김민수

### 박명준

### 박시연

### 안재민

# 파일구조
<details>
  <summary>파일 구조</summary>
  <pre>
📦src
 ┣ 📂components
 ┃ ┣ 📂addStartup
 ┃ ┃ ┣ 📂modal
 ┃ ┃ ┃ ┣ 📜modal.css
 ┃ ┃ ┃ ┗ 📜modal.js
 ┃ ┃ ┣ 📜addStartup.css
 ┃ ┃ ┗ 📜addStartup.js
 ┃ ┣ 📂Buttons
 ┃ ┃ ┣ 📜ActionButton.css
 ┃ ┃ ┣ 📜ActionButton.js
 ┃ ┃ ┣ 📜PaginationButton.css
 ┃ ┃ ┗ 📜PaginationButton.js
 ┃ ┣ 📂ChipContent
 ┃ ┃ ┣ 📜ChipContent.css
 ┃ ┃ ┗ 📜ChipContent.js
 ┃ ┣ 📂ComapanyItem
 ┃ ┃ ┣ 📜CompanyItem.css
 ┃ ┃ ┗ 📜CompanyItem.js
 ┃ ┣ 📂CompanyChip
 ┃ ┃ ┣ 📜CompanyChip.css
 ┃ ┃ ┗ 📜CompanyChip.js
 ┃ ┣ 📂CompanyDetail
 ┃ ┃ ┣ 📂Forms
 ┃ ┃ ┃ ┣ 📜DeleteFailForm.css
 ┃ ┃ ┃ ┣ 📜DeleteFailForm.js
 ┃ ┃ ┃ ┣ 📜DeleteModalForm.css
 ┃ ┃ ┃ ┗ 📜DeleteModalForm.js
 ┃ ┃ ┣ 📂Inputs
 ┃ ┃ ┃ ┣ 📜Inputs.css
 ┃ ┃ ┃ ┗ 📜Inputs.js
 ┃ ┃ ┣ 📜CompanyDetail.css
 ┃ ┃ ┣ 📜CompanyDetail.js
 ┃ ┃ ┣ 📜InvesterList.css
 ┃ ┃ ┣ 📜InvesterList.js
 ┃ ┃ ┣ 📜InvesterListDropdown.css
 ┃ ┃ ┗ 📜InvesterListDropdown.js
 ┃ ┣ 📂CompanyRank
 ┃ ┃ ┣ 📂InvestList
 ┃ ┃ ┃ ┣ 📜CompanyRankInvestList.js
 ┃ ┃ ┃ ┣ 📜CompanyRankInvestTitle.js
 ┃ ┃ ┃ ┣ 📜InvestList.module.css
 ┃ ┃ ┃ ┗ 📜InvestTitle.module.css
 ┃ ┃ ┣ 📜CompanyRank.css
 ┃ ┃ ┗ 📜CompanyRank.js
 ┃ ┣ 📂ComparisonList
 ┃ ┃ ┣ 📜ComparisonList.js
 ┃ ┃ ┣ 📜ComparisonList.module.css
 ┃ ┃ ┣ 📜ComparisonTitle.js
 ┃ ┃ ┗ 📜ComparisonTitle.module.css
 ┃ ┣ 📂ComparisonViewer
 ┃ ┃ ┣ 📂InvestList
 ┃ ┃ ┃ ┣ 📜ComparisonInvestList.js
 ┃ ┃ ┃ ┣ 📜ComparisonInvestTitle.js
 ┃ ┃ ┃ ┣ 📜InvestList.module.css
 ┃ ┃ ┃ ┗ 📜InvestTitle.module.css
 ┃ ┃ ┣ 📜ComparisonViewer.css
 ┃ ┃ ┗ 📜ComparisonViewer.js
 ┃ ┣ 📂InvestList
 ┃ ┃ ┣ 📜InvestList.js
 ┃ ┃ ┣ 📜InvestList.module.css
 ┃ ┃ ┣ 📜InvestTitle.js
 ┃ ┃ ┗ 📜InvestTitle.module.css
 ┃ ┣ 📂Layout
 ┃ ┃ ┣ 📜Layout.css
 ┃ ┃ ┗ 📜Layout.js
 ┃ ┣ 📂modal
 ┃ ┃ ┣ 📜modal.css
 ┃ ┃ ┗ 📜modal.js
 ┃ ┣ 📂MyCompany
 ┃ ┃ ┣ 📜MyCompany.css
 ┃ ┃ ┗ 📜MyCompany.js
 ┃ ┣ 📂Nav
 ┃ ┃ ┣ 📜Nav.css
 ┃ ┃ ┗ 📜Nav.js
 ┃ ┣ 📂OtherCompany
 ┃ ┃ ┣ 📜OtherCompany.css
 ┃ ┃ ┗ 📜OtherCompany.js
 ┃ ┗ 📂StartupList
 ┃ ┃ ┣ 📜StartupList.js
 ┃ ┃ ┣ 📜StartupList.module.css
 ┃ ┃ ┣ 📜StartupTitle.js
 ┃ ┃ ┗ 📜StartupTitle.module.css
 ┣ 📂images
 ┃ ┣ 📜btn-plus.svg
 ┃ ┣ 📜complete.png
 ┃ ┣ 📜delete-chip.svg
 ┃ ┣ 📜delete-img.svg
 ┃ ┣ 📜ic_search.svg
 ┃ ┣ 📜ic_toggle.svg
 ┃ ┣ 📜initialization.png
 ┃ ┣ 📜initialization.svg
 ┃ ┣ 📜kebab.svg
 ┃ ┣ 📜logo-img.svg
 ┃ ┣ 📜Mask group.svg
 ┃ ┣ 📜navLogo.png
 ┃ ┣ 📜not-found.png
 ┃ ┣ 📜page-before-button.png
 ┃ ┣ 📜page-next-button.png
 ┃ ┣ 📜pass-close.svg
 ┃ ┣ 📜pass-open.svg
 ┃ ┣ 📜search-button.svg
 ┃ ┣ 📜search-delete.svg
 ┃ ┗ 📜visibility-eye.png
 ┣ 📂pages
 ┃ ┣ 📂CompanyDetailPage
 ┃ ┃ ┣ 📜CompanyDetailPage.css
 ┃ ┃ ┗ 📜CompanyDetailPage.js
 ┃ ┣ 📂CompareCompany
 ┃ ┃ ┣ 📜CompareCompany.css
 ┃ ┃ ┗ 📜CompareCompany.js
 ┃ ┣ 📂ComparisonPage
 ┃ ┃ ┣ 📜ComparisonViewer.css
 ┃ ┃ ┗ 📜ComparisonViewer.js
 ┃ ┣ 📂investment
 ┃ ┃ ┣ 📜investment.css
 ┃ ┃ ┗ 📜investment.js
 ┃ ┣ 📂InvestPage
 ┃ ┃ ┣ 📜InvestViewer.css
 ┃ ┃ ┗ 📜InvestViewer.js
 ┃ ┣ 📂NotFoundPage
 ┃ ┃ ┣ 📜NotFoundPage.css
 ┃ ┃ ┗ 📜NotFoundPage.js
 ┃ ┗ 📂StartupPage
 ┃ ┃ ┣ 📜StartupViewer.css
 ┃ ┃ ┗ 📜StartupViewer.js
 ┣ 📜api.js
 ┣ 📜App.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┗ 📜reset.css
  </pre>
</details>

# 구현 홈페이지
링크

# 프로젝트 회고록
(제작한 발표자료 링크 혹은 첨부파일)
