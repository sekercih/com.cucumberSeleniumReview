$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/google.feature");
formatter.feature({
  "name": "Google arama",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "TC01_kullanici googleda lorentlabs aramasi yapar",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "kullanici google sayfasina gider",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "arama kutusuna lorentlabs yazar",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "arama sonuçlari sayfasinin basligini kontrol eder.",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});