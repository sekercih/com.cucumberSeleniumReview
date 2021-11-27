Feature: Google arama
  Scenario: TC01_kullanici googleda lorentlabs aramasi yapar
    Given kullanici google sayfasina gider
    And arama kutusuna lorentlabs yazar
    Then arama sonuçlari sayfasinin basligini kontrol eder.