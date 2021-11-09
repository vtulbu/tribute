function InfoPicker(pID: Number, selector: string) {
  const Information = {
    2: {
      leftSectionEventBox: " March 25, 1914 Born in Cresco, Iowa",
      leftSectionInformation:
        "Norman Borlaug was born to Henry Oliver (1889–1971) and Clara (Vaala) Borlaug (1888–1972) on his grandparents' farm in Saude in 1914, the first of four children. His three sisters were Palma Lillian (Behrens; 1916–2004), Charlotte (Culbert; b. 1919) and Helen (b. 1921).",
      leftSectionYear: "1914",
      leftSectionImage: "/img/Norman-Borlaug-child-family.jpg",
      rigthSectionEventBox:
        " 1933 - Norman Borlaug Admission to the Minnesota University",
      rigthSectionInformation:
        '1933 - Norman Borlaug leaves his family\'s farm to attend the University of Minnesota, thanks to a Depression era program known as the "National Youth Administration"',
      rigthSectionYear: "1933",
      rigthSectionImage: "/img/university_of_minnesota.jpg",
    },
    3: {
      leftSectionEventBox: "1935 Civilian Conservation Corps",
      leftSectionInformation:
        'Stop school Norman Borlaug has to stop school and save up more money. Works in the Civilian Conservation Corps, helping starving Americans. "I saw how food changed them", he said. "All of this left scars on me.\'',
      leftSectionYear: "1935",
      leftSectionImage: "/img/civilian-conservation-corps-building-road.jpg",
      rigthSectionEventBox: "1937  US Forestry Service",
      rigthSectionInformation:
        "Norman Borlaug finishes university and takes a job in the US Forestry Service",
      rigthSectionYear: "1937",
      rigthSectionImage: "/img/US-Forest-Service.jpg",
    },
    4: {
      leftSectionEventBox: "Norman Borluag marries",
      leftSectionInformation:
        "1938 Norman Borlaug marries his 24-year-old wife, Margret Gibson. It is made available due to budget cuts. Inspired by Elvin Charles Stakman, he returns to school under Stakman, who teaches him how to grow pest-resistant plants.",
      leftSectionYear: "1938",
      leftSectionImage: "/img/Norman-Borlaug-and-his-wife.jpg",
      rigthSectionEventBox:
        "Norman Borlaug in  Mexico head a new plant pathology program",
      rigthSectionInformation:
        "1944 Norman Borlaug rejects a 100% salary increase from Dupont, leaves behind his pregnant wife, and flies to Mexico to head a new plant pathology program. Over the next 16 years, his team breeds 6,000 different strains of disease resistent wheat - including different varieties for each major climate on Earth.",
      rigthSectionYear: "1944",
      rigthSectionImage: "/img/foto-more-women.gif",
    },
    5: {
      leftSectionEventBox: " Norman Bourlaug visits Delhi",
      leftSectionInformation:
        "1962 Norman Bourlaug Visits Delhi and brings his high-yielding strains of wheat to the Indian subcontinent in time to help mitigate mass starvation due to a rapidly expanding population",
      leftSectionYear: "1962",
      leftSectionImage: "/img/N.B.with the peoples.jpg",
      rigthSectionEventBox: "Norman Borlaug's 2005 speech",
      rigthSectionInformation:
        'In his 2005 speech, Norman Bourlaug stated that "we will have to double the world\'s food supply by 2050." He argues that genetically modified crops are the only way we can meet demand because we run out of arable land. He says genetically modified crops are not inherently dangerous because "we\'ve been genetically modifying plants and animals for a long time. Long before we called it science, humans chose the best breeds."',
      rigthSectionYear: "2005",
      rigthSectionImage: "/img/Norman-Borlaug speaks.jpg",
    },
    6: {
      centerEventBox: "Norman Borlaug dies",
      centerInformation: " 2009 Norman Bourlaug dies at the age of 95.",
      centerYear: "2009",
      centerImage: "/img/norman_borlaug_portrait.jpg",
      centerLink: "More info on the wikipedia",
    },
  };
  let info = Information[pID][selector];
  return info;
}

export default InfoPicker;
