const navHtmlSource = `
<ul>
    <li>
        <div class="menuBox">
            <a class="hanec" href="./company.html">hanwha e&c</a>
            <div class="menuIcon">＋</div>
        </div>
        <ul>
            <li>
                <a href="./company.html">경영이념</a>
            </li>
            <li>
                <a href="./company.html">연혁</a>
            </li>
            <li>
                <a href="./company.html">조직도</a>
            </li>
            <li>
                <a href="./company.html">재무정보</a>
            </li>
            <li>
                <a href="./company.html">CI</a>
            </li>
            <li>
                <a href="./company.html">BI</a>
            </li>
            <li>
                <a href="./company.html">찾아오시는길</a>
            </li>
        </ul>
    </li>
    <li>
        <div class="menuBox">
            <a href="./business.html">business</a>
            <div class="menuIcon">＋</div>
        </div>
        <ul>
            <li>
                <a href="./business.html">토목 사업</a>
            </li>
            <li>
                <a href="./business.html">건축 사업</a>
            </li>
            <li>
                <a href="./business.html">주택 사업</a>
            </li>
            <li>
                <a href="./business.html">플랜트 사업</a>
            </li>
            <li>
                <a href="./business.html">기술연구소</a>
            </li>
        </ul>
    </li>
    <li>
        <div class="menuBox">
            <a href="./prcenter.html">pr center</a>
            <div class="menuIcon">＋</div>
        </div>
        <ul>
            <li>
                <a href="./prcenter.html">사회공헌</a>
            </li>
            <li>
                <a href="./prcenter.html">공익사업</a>
            </li>
            <li>
                <a href="./prcenter.html">활동내용</a>
            </li>
            <li>
                <a href="./prcenter.html">윤리경영</a>
            </li>
            <li>
                <a href="./prcenter.html">공지사항</a>
            </li>
            <li>
                <a href="./prcenter.html">사내소식</a>
            </li>
            <li>
                <a href="./prcenter.html">홍보자료실</a>
            </li>
        </ul>
    </li>
    <li>
        <div class="menuBox">
            <a href="./careers.html">careers</a>
            <div class="menuIcon">＋</div>
        </div>
        <ul>
            <li>
                <a href="./careers.html">인재개발</a>
            </li>
            <li>
                <a href="./careers.html">인사제도</a>
            </li>
            <li>
                <a href="./careers.html">직무소개</a>
            </li>
            <li>
                <a href="./careers.html">채용공고</a>
            </li>
            <li>
                <a href="./careers.html">채용FAQ</a>
            </li>
        </ul>
    </li>
    <li>
        <div class="menuBox">
            <a href="./customer.html">customer</a>
            <a class="menuIcon">＋</a>
        </div>
        <ul>

        <li>
                <a href="customer.html">고객문의</a>
            </li>
            <li>
                <a href="customer.html">고객문의확인</a>
            </li>
            <li>
                <a href="customer.html">사이버신문고</a>
            </li>
            <li>
                <a href="customer.html">FAQ</a>
            </li>
        </ul>
    </li>
</ul>
`;

// const slideCon_arr = [
//     {img:"main_slide01.jpg", title:"Aqua planet", sub:"일산 아쿠아 플라넷", des:"한화건설의 모든 건축물들은 인간 중심의 첨단 기술을 바탕으로예술성과 기능이 조화를 이룬 공간입니다."},
//     {img:"main_slide02.jpg", title:"Seoul Forest Galleria Foret", sub:"서울숲 갤러리아 포레", des:"서울숲과 어우러지는 입체적인 조경계획"},
//     {img:"main_slide03.jpg", title:"Eco Metro", sub:"인천 에코메트로", des:"살기좋은 아파트의 대표 브랜드 <꿈에그린>"},
//     {img:"main_slide04.jpg", title:"Ulsan Bridge", sub:"울산대교", des:"대한민국을 더욱 풍요롭게 만드는 국토 창조의 힘"},
// ];


const slideCon_arr = [
    ["main_slide01.jpg", "Aqua planet", "일산 아쿠아 플라넷", "한화건설의 모든 건축물들은 인간 중심의 첨단 기술을 바탕으로예술성과 기능이 조화를 이룬 공간입니다."],
    ["main_slide02.jpg", "Seoul Forest Galleria Foret", "서울숲 갤러리아 포레", "서울숲과 어우러지는 입체적인 조경계획"],
    ["main_slide03.jpg", "Eco Metro", "인천 에코메트로", "살기좋은 아파트의 대표 브랜드 <꿈에그린>"],
    ["main_slide04.jpg", "Ulsan Bridge", "울산대교", "대한민국을 더욱 풍요롭게 만드는 국토 창조의 힘"],
];

const businessItem = [
    ["main_icon01_off.png", "산업발전의 근간이 되는 도로,교량,철도 및 단지 조성 공사부터 생명의 근원인 맑고 깨끗한 물을 전국에 공급하기 위한 수처리 사업에 이르기까지 오늘도 한화건설은 국토 곳곳에 생명을 불어 넣습니다."],
    ["main_icon02_off.png", "둘러싼 한화건설의 모든 건축물들은 인간 중심의 첨단 기술을 바탕으로 예술성과 기능이 조화를 이룬 공간입니다. 최고의 효율성과 편의성이 구비된 공간 창조를 통해 행복한 생활과 쾌적한 여유까지 제공해 드립니다."],
    ["main_icon03_off.png", "한화건설이 창조하는 주거 공간에는 친환경적인 이상과 인간 중심의 주거 과학이 고스란히 살아 있습니다. 대한민국을 대표하는 최고 수준의 랜드마크에서 누리는 삶, 이 모든 꿈과 행복을 함께 나누고 싶습니다."],
    ["main_icon04_off.png", "발전 및 담수플랜트, 화공플랜트 등 국내 플랜트 사업의 선두 주자 한화건설은 사우디 현지법인을설립하여 각종 플랜트 공사를 성공적으로 수행하고 있으며, 중동 및 동남아시장 등으로 사업 영역을 확장하고 있습니다."],
];


const projectItem = [
    ["slide01.jpg", "아레나 공연장", "필리핀 마닐라", "7만 4000㎡", "2012 ~ 2015", "INC"],
    ["slide02.jpg", "비스미야 신도시", "바그다드 동남부 비스마야", "1,830ha", "2012 ~ 2019", ""],
];

const facilityItem = [
    ["01_img.png", "업무 시설", "예술적이고 쾌적한 사무용 빌딩을 한화건설이 만듭니다."],
    ["02_img.png", "레저 시설", "아름다운 자연환경에 편리함이 조화를 이뤄 여유로운 레저생활을 창조합니다."],
    ["03_img.png", "판매/영업 시설", "시선과 발길이 머무는 공간을 완성합니다."],
    ["04_img.png", "의료/교육 시설", "최적의 의료환경, 최고의 교육환경을 만들어 갑니다."],
    ["05_img.png", "특수 시설", "대전 엑스포 한빛탑, 종합운동장, 서울 역사 등 지역의 랜드마크를 만들어 갑니다."],
    ["06_img.png", "리모델링", "시오래된 건물이 꿈에 그리던 아름다운 모습으로 재탄생 합니다."],
];

const grantItem = [
    ["content_img1.jpg", "사회복지", "세상은 함께 하기에 더 아름답고,친구가 있어 더 따뜻합니다.한화는 사회적 배려자를 위한 다양한 사회복지 프로그램을 통해 우리 주변 소외된 이웃과 함께 희망을현실로 만들어가고 있습니다."],
    ["content_img2.jpg", "문화예술", "세상은 함께 하기에 더 아름답고,친구가 있어 더 따뜻합니다.한화는 사회적 배려자를 위한 다양한 사회복지 프로그램을 통해 우리 주변 소외된 이웃과 함께 희망을현실로 만들어가고 있습니다."],
    ["content_img3.jpg", "자원봉사", "세상은 함께 하기에 더 아름답고,친구가 있어 더 따뜻합니다.한화는 사회적 배려자를 위한 다양한 사회복지 프로그램을 통해 우리 주변 소외된 이웃과 함께 희망을현실로 만들어가고 있습니다."],
];

const careersType = [
    ["icon_challenge.jpg", "CHALLENGE", "도전적인 한화인", "기존의 틀에 안주하지 않고 변화와 혁신을 통해 최고를 추구한다.", "맡은 분야에서 최고가 되기 위해 적극적인 자기개발을 한다. 열린 사고와 창의적 발상으로 새로운 방안과 기회를 찾아낸다. 할 수 있다는자신감으로 도전적인 목표를 설정하고 달성한다."],
    ["icon_dedication.jpg", "DEDICATION", "헌신적인 한화인", "회사, 고객, 동료와의 인연을 소중히 여기며 보다 큰 목표를 위해 혼신의 힘을 다한다.", "고객과 약속을 소중히 여기며 고객가치를 지속적으로 창출한다. 공동운명체의식을 바탕으로, 서로의 가능성을 믿고 협력한다."],
    ["icon_integrity.jpg", "INTEGRITY", "진실된 한화인", "자긍심을 바탕으로 원칙에 따라 바르고 공정하게 행동합니다.", "눈 앞의 이익에 흔들리지 않고 원칙에 따라 정직하게 행동한다. 공과 사를 구분하여 능력과 성과에 따라 투명하고 공정하게 대우한다."],
];


const careersDevelopProgramTitle = [
    ["icon01.png", "회사 비전 및 가치 공유 프로그램"],
    ["icon02.png","전문인력 육성 프로그램"],
    ["icon03.png","GLOBAL 인재 양성 프로그램"],
]
const careersDevelopProgram1 = [
    ["신입사원 조기 전력화 프로그램", "그룹 입문 과정", "건설 입문 과정", "OJT 과정", "Mentoring 제도", "Follow-up 과정", "3급사원 입문 과정"],
    ["전문가 양성 프로그램", "직무 전문가 양성 과정", "공통 역량 과정", "동계직무교육", "학점이수제도", "석박사 과정 및 고위경영자 과정"],
    ["해외 MBA 프로그램", "Global Executive MBA 과정", "TOP MBA 과정"],
];
const careersDevelopProgram2 = [
    ["正道경영 및 가치 공유 프로그램", "고객만족 CS특강", "윤리경영교육", "승격자 과정", "관리자 교육", "경력사원 입문 과정"],
    ["차세대 리더 양성 프로그램", "차세대 현장 리더 양성 교육", "핵심인재 육성 프로그램", "혁신리더 과정"],
    ["차세대 리더 양성 프로그램", "어학 지원 제도", "해외 지역전문가 제도", "Global Biz 과정", "해외사업 전문가 과정"],
];