// Random Fact Display
const facts = [
  'SUVs, or Sports Utility Vehicles, are known for their high ground clearance and off-road capability.',
  'Sedans typically have a three-box configuration with separate compartments for the engine, passengers, and cargo.',
  'Convertibles have a roof structure that can be "converted" to allow open-air or enclosed driving.',
  'SUVs are popular for their spacious interiors and ability to handle rough terrain.',
  'Sedans are often favored for their smooth ride and fuel efficiency.',
  'Convertibles are prized for offering a unique driving experience with the top down.',
  'Many modern SUVs come with advanced safety features and all-wheel drive systems.',
  'Sedans have been a staple of the automotive market for decades due to their balance of performance and practicality.',
  'Convertibles often feature reinforced chassis to compensate for the lack of a fixed roof.'
];

document.querySelector('.random-fact-btn').addEventListener('click', () => {
  const randomFact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById('factDisplay').textContent = randomFact;
});

