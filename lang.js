// Function to change language
function changeLanguage(language) {
  const heading = document.getElementById('aboutUsHeading');
  const aboutText = document.getElementById('aboutUsText');

  switch (language) {
    case 'en':
      heading.textContent = 'About Us';
      aboutText.innerHTML = `
          <p>Welcome to Car Rent, your trusted partner for hassle-free and affordable car rentals! We pride ourselves on transparency, with no hidden fees, and a strong commitment to customer satisfaction.</p>
          <p>Our mission is to provide reliable vehicles and outstanding service. Whether you're renting for a day, a week, or a month, you can count on Car Rent for a smooth and enjoyable journey. Our diverse fleet caters to all your needs, offering flexibility for any trip or occasion.</p>
          <p>At Car Rent, we believe in making car rentals easy and accessible for everyone. That's why we offer:</p>
          <ul>
            <li>A wide variety of vehicles to choose from</li>
            <li>Affordable prices with no hidden costs</li>
            <li>24/7 customer support</li>
            <li>Convenient online booking and flexible rental terms</li>
            <li>Regularly serviced and well-maintained cars</li>
          </ul>
          <p>Thank you for choosing Car Rent. We are here to help you get on the road quickly and safely, wherever your destination may be.</p>
        `;
      break;
    case 'ru':
      heading.textContent = 'О нас';
      aboutText.innerHTML = `
          <p>Добро пожаловать в Car Rent, вашего надежного партнера для аренды автомобилей без хлопот и по доступной цене! Мы гордимся прозрачностью, отсутствием скрытых платежей и стремлением к удовлетворению потребностей клиентов.</p>
          <p>Наша миссия - предоставить надежные автомобили и исключительное обслуживание. Будь то аренда на день, неделю или месяц, на Car Rent можно рассчитывать для комфортной и безопасной поездки. Наш автопарк удовлетворит любые потребности, предлагая гибкие решения для любого случая.</p>
          <p>Мы делаем аренду автомобилей доступной для всех. Вот что мы предлагаем:</p>
          <ul>
            <li>Широкий выбор автомобилей</li>
            <li>Доступные цены без скрытых платежей</li>
            <li>Круглосуточная поддержка клиентов</li>
            <li>Удобное онлайн-бронирование и гибкие условия аренды</li>
            <li>Регулярное техническое обслуживание автомобилей</li>
          </ul>
          <p>Спасибо, что выбрали Car Rent. Мы поможем вам быстро и безопасно отправиться в дорогу, куда бы вы ни направлялись.</p>
        `;
      break;
    case 'kz':
      heading.textContent = 'Біз туралы';
      aboutText.innerHTML = `
          <p>Car Rent компаниясына қош келдіңіздер! Біз сенімді, ыңғайлы және қолжетімді көліктерді жалға береміз. Ешқандай жасырын төлемдерсіз және тұтынушылардың қажеттіліктеріне ерекше назар аударамыз.</p>
          <p>Біздің мақсатымыз - сенімді қызмет көрсету және кез келген уақытта қол жетімді көліктер ұсыну. Қысқа мерзімді немесе ұзақ мерзімді жалға алу болса да, сіздің сапарыңыз жайлы және қауіпсіз болады. Көліктердің кең таңдауы кез келген саяхатқа жарайды.</p>
          <p>Біз көлік жалдауды барлығына қол жетімді етуге тырысамыз. Сондықтан біз мыналарды ұсынамыз:</p>
          <ul>
            <li>Көліктердің үлкен таңдауы</li>
            <li>Қолжетімді бағалар және жасырын төлемдердің болмауы</li>
            <li>Кез келген уақытта 24/7 қолдау қызметі</li>
            <li>Икемді жалға беру шарттары және ыңғайлы онлайн брондау</li>
            <li>Көліктердің үнемі техникалық қызмет көрсетуі</li>
          </ul>
          <p>Car Rent компаниясын таңдағаныңыз үшін рахмет. Біз сізге кез келген бағытта қауіпсіз және жылдам саяхаттауға көмектесеміз.</p>
        `;
      break;
  }
}

// Event listener for language selector
document.getElementById('languageSelector').addEventListener('change', function() {
  const selectedLanguage = this.value;
  changeLanguage(selectedLanguage);
});

// Initialize the default language as English
window.onload = function() {
  changeLanguage('en');
};
