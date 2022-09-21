'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "21b538f1f548d10ee04e437d46e18e93",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/AssetManifest.json": "9f26474e9271776498a714b18e560af3",
"assets/FontManifest.json": "37760c93dcaf764aed15121e8566e5ec",
"assets/assets/images/papermap.png": "19aaa38077b1a8865ff1982e94780544",
"assets/assets/images/empathizetimeline-3.png": "f9a7bbd3378c6ce54e9ae266cfb8e93e",
"assets/assets/images/initialscreen2.png": "e44730f75235af7f88b439acae1937c6",
"assets/assets/images/profilebg.png": "26bdf1d5ff577c59931d8fffdbf72901",
"assets/assets/images/timer-image.png": "f5583f326683eb76da6ff43f00024cee",
"assets/assets/images/empathizetimeline-1.png": "3a14aeb95c5230b2ba78bf133e2baa70",
"assets/assets/images/newlogo.png": "a102c3d5524c19b4fb7742ed762e4c8e",
"assets/assets/images/loginillustration.png": "6b56f0cfe1a2989d4a7c35d08c716b84",
"assets/assets/images/photo.png": "47b9a27c236c30260a6104cd38931ff9",
"assets/assets/images/mitut.png": "cb4afacdaca54ab12d22ab19d2bfdc2a",
"assets/assets/images/signupill.png": "025ac440df5036fc884e937e28ab2adc",
"assets/assets/images/dezylogo.gif": "6ef773dcabe88b6c9117fab4a858b0ba",
"assets/assets/images/circleDots.png": "298a282ccb9668b472380d221cb78ac0",
"assets/assets/images/sprint.png": "4bbbd7cd172549baa425bdd622714c8d",
"assets/assets/images/prtut.png": "0b5213e55ebe81c96375d1cea709f5af",
"assets/assets/images/sidedesign.png": "a5d076ed6506e811d75479ab545c24b9",
"assets/assets/images/journey.png": "74a4d4b48f01f3cf2b46547f410fc72c",
"assets/assets/images/sideteam.png": "84b48aa9463345f322cc6fcf32e27ab6",
"assets/assets/images/ivsfanalysis.png": "6d0986c53d43a4d7f5f1d19164db0e4f",
"assets/assets/images/empathizetimeline-2.png": "f8e98d77e0d8cf71c9c824ab064b4cbc",
"assets/assets/images/splashpng1.png": "4a9ddd63214a630fb11872037107c758",
"assets/assets/images/chat.png": "a9f7cd353822a4b8b3e5e41dc4cd86b8",
"assets/assets/images/manage_team.png": "39c0b3dbbd8116711883ed44d6f43d46",
"assets/assets/images/cr8tut.png": "a0e53e56b025fcc4ccb05bdf0273b836",
"assets/assets/images/crazy8.png": "c22055e8ce82b2e887427eb2fe6d6622",
"assets/assets/images/loginill.png": "35c08a0d63430da87dd8df04374dcdd1",
"assets/assets/images/visibility.png": "06f103cb2fae09b3dfbbe4aba0861778",
"assets/assets/images/google.jpg": "21691b39ff925c633115f0021e72d7f5",
"assets/assets/images/sidehome.png": "b82c9bfde8abee04db89f2c531075165",
"assets/assets/images/faq.png": "2d2a3e656d7747bddc2f946371d6bf11",
"assets/assets/images/digitalmap.png": "a4195ca67b3ce12f084fab977d6db25f",
"assets/assets/images/loginpage.png": "5b655c9e9fbcf46231389cf4e09bf813",
"assets/assets/images/apple.png": "0328928b05c2708bd4daddad2587efa8",
"assets/assets/images/tips.png": "739d2b6caff6bee9621e91944d12a79d",
"assets/assets/images/sidetips.png": "31281ca736011fcc5beacd52061bf60a",
"assets/assets/images/definegoaltutorial-1.png": "99f17e4804eb29e150a9587a1f9d47af",
"assets/assets/images/signup.png": "4555eb42a64b0ce1236012032e5adeeb",
"assets/assets/images/forgotpassowrd.png": "2577f913736d15c308edbb01a90c682c",
"assets/assets/images/chat2.png": "99825c2ba4ab30ff51aa21d483be02db",
"assets/assets/images/initialscreen1.png": "9465f84dfb9bd641ff181c89ae296362",
"assets/assets/images/congratulations.png": "e54262a3f7937ca728cc8a7c59c426b8",
"assets/assets/images/eyeclose.png": "88cc8e5ae044fc9007861fb62ab8a595",
"assets/assets/images/search.png": "e9612850a6cb55eb547266043e1eef86",
"assets/assets/images/faceb.png": "61a96c78b48018b48fbb6254a93b93f8",
"assets/assets/images/sidefaqs.png": "17a1d6827194138189af1153d6f50ca5",
"assets/assets/images/logout.png": "59447b5f3990c1cfea81988848c89072",
"assets/assets/images/ivsftut.png": "fd0fda0e1d650cbb4747fd29ec740b49",
"assets/assets/images/gmail.png": "2c1a7560c88ea83e6b2593cd07af8ad8",
"assets/assets/images/sidelegal.png": "90aad34ed157c5bfa4eac27bee61743e",
"assets/assets/images/initialscreen3.png": "189907048ef40c6f6ac509917e360111",
"assets/assets/images/Journeymaptutorial.png": "ec0c7f87e2058a9642f0708931c91418",
"assets/assets/images/initialscreen-1.svg": "02e98b4027ab1f2734dd2b416bd7efae",
"assets/assets/images/facebook.png": "8f5ce27564945d2c9a10ef827549a78c",
"assets/assets/images/folder.png": "0adb12633d2869ea7dd99c12a96421d5",
"assets/assets/images/definegoaltutorial-2.png": "fbf1ab743136f3e8efd22bae79874e2e",
"assets/assets/images/ep_banner.png": "853b5e1d12b756ee1577a9db9d97d4c1",
"assets/assets/images/dezylogo.png": "7dbced81cff57a1c988ad3caf8cc7f05",
"assets/assets/images/shadowingtut.png": "d98f5f78ee26873916be9139d419dc62",
"assets/assets/images/ritut.png": "163d27cfdd2fca4d20f50e0d765ed38a",
"assets/assets/images/circleDotswo.png": "190c04e16f7e9b037f03e4270d355c6e",
"assets/assets/images/home.png": "8bd9b912bf3b04896a122c3a0aad4ee1",
"assets/assets/images/legal.png": "211a72af548a6b80b8aed397c3c8d893",
"assets/assets/images/definegoaltutorial-3.png": "81ae2ddb4e24c2fb79900cad75158eab",
"assets/assets/images/uitut.png": "5ab4800b00545de574c224fe9ee5ee9b",
"assets/assets/images/pdf.png": "1eca7d6378b70e5b04db790516710537",
"assets/assets/images/designsprintgraphic.png": "11365b776b64cff235dc4d4ebd6baef3",
"assets/assets/svg/SelectecBulb.svg": "05b75cb93936e6d2188c055433332d3d",
"assets/assets/svg/LogoAppbar%25202.svg": "4e628eba949ae4e69618dbe81ca7f380",
"assets/assets/svg/Files.svg": "2303b98f77393b163dcd29b83339c558",
"assets/assets/svg/splash1.svg": "c1607d6cfbdf18c7cac62b8c6f44303d",
"assets/assets/svg/Square.svg": "2920c0a6ce10350345a5d2963c22e003",
"assets/assets/svg/goal%25202.svg": "8f015208fa8df278347459ad90be7a4f",
"assets/assets/svg/Group%252034618.svg": "be838010941bcaaa5c157677568fbe4d",
"assets/assets/svg/NotHouse_02.svg": "b96357c63115882a08432421174b8b4a",
"assets/assets/svg/empathy%2520(1)%25202.svg": "a450e2f789c3d1670a2b22d0267f0a36",
"assets/assets/svg/Group%252034617.svg": "be838010941bcaaa5c157677568fbe4d",
"assets/assets/svg/NotUsers.svg": "429a99ea2964bdd6b086168d3a5ca827",
"assets/assets/svg/forward_blue.svg": "6c7526aba449c7947ea7d22f5c049826",
"assets/assets/svg/Group%252034550.svg": "242aba0271edd9104af73cb31e712c72",
"assets/assets/svg/Frame%2520279315%2520(1).svg": "fc3aed20f20e92cac9f45f314a74f8e9",
"assets/assets/svg/Phone.svg": "0c7b3b59c7710b052ad9dddae442ea74",
"assets/assets/svg/Group%25204761.svg": "e0a293f89dd20bf49aa94d318ac9e712",
"assets/assets/svg/Rectangle%25201817.svg": "99fed2892ea25f47a60b1616b0097e7f",
"assets/assets/svg/GV.svg": "e0e0bfd76f0297e22edea5128d54107a",
"assets/assets/svg/image%25204.png": "db06db1733ae3691956c8db987584e2f",
"assets/assets/svg/splash3.svg": "065a40ac5bd6a3f90ad88318b7a1b64e",
"assets/assets/svg/Info.svg": "5a75d441f0f2968412ecbea22c6750e7",
"assets/assets/svg/150+.svg": "4bd041d14710c4b5c85e80ef41afca49",
"assets/assets/svg/Rectangle%25201818.svg": "6d5fab3395b1d5a1d17f257a2e652451",
"assets/assets/svg/NotChat_Conversation_Circle.svg": "fa48cbabdc348757919c4be4963bae9b",
"assets/assets/svg/SelectedMonitor.svg": "12753e8e707326c2c25cde6498161bd6",
"assets/assets/svg/Group%252034572.svg": "52bedc12766450a7efe969c4a1c87174",
"assets/assets/svg/NotGroup%252034606.svg": "f92010d3175be298a28a2281b23fdaf7",
"assets/assets/svg/bell.svg": "b3383361f4cb954d3fa9e887612a9d34",
"assets/assets/svg/NotBulb.svg": "1db3bccaf2a6651343dadb0058f870c2",
"assets/assets/svg/Ellipsevertical.svg": "32b9b4a4087314da0251f306b7e6f647",
"assets/assets/svg/calendar.svg": "745758245f01b6cd0e93ccb4d04a895a",
"assets/assets/svg/Ellipse%2520615.svg": "9795c452da4207ec1cf8f8f3d80222ec",
"assets/assets/svg/SelectedUsers.svg": "916f920d25f4fc4d95d6127721065352",
"assets/assets/svg/Premium.svg": "23a2964cd9cf626bb616a9117ce1bf7b",
"assets/assets/svg/chart_bar_vertical_01.svg": "2e09db418755464d59331bd73c7e3a03",
"assets/assets/svg/Group%25204834.svg": "61b965d46c43f15a0db6a10657aeca6a",
"assets/assets/svg/Group%25204838.svg": "48d26aa576baf994fcaa5016a579d117",
"assets/assets/svg/Frame%2520279321.svg": "6db78598ed08c23368fa6cf308407aa4",
"assets/assets/svg/NotMonitor.svg": "12753e8e707326c2c25cde6498161bd6",
"assets/assets/svg/Emoji.svg": "a6c23e877805a65d978e9cd523010771",
"assets/assets/svg/idea%25201.svg": "709220c26fedc10431555248909b1380",
"assets/assets/svg/SelectedVector.svg": "f3a51187ffd1324c7fdf2bfce30cb1bd",
"assets/assets/svg/splash2.svg": "26d385778cb07d25a85dabd3949cf985",
"assets/assets/WebImages/NavBarButton/dashboard.png": "0a9d29012cf57044fdc5d6db88ab4cf8",
"assets/assets/WebImages/NavBarButton/active%2520sprint.png": "4e99099289ff08e339ef947feee07ff1",
"assets/assets/WebImages/NavBarButton/FAQs.png": "e29b89582bbc7dac4ee9c027df241ba2",
"assets/assets/WebImages/NavBarButton/LegalPolicy.png": "9d15d320a923ca87fe04ed7f14fb476b",
"assets/assets/WebImages/NavBarButton/MngTeam.png": "39c504fc9df8c7c457276d64e9d2fb28",
"assets/assets/WebImages/NavBarButton/idea.png": "2c08d7d556f403692def9c34820f3107",
"assets/assets/WebImages/NavBarButton/home.png": "92109147688a551629800149edb4ef86",
"assets/assets/WebImages/ResetPassword.png": "bcef30220f99bb54534eee7e0e7aac66",
"assets/assets/WebImages/SprintTimeLines/UserTesting.png": "b114e248d545a3f14bca32f2dfdc1806",
"assets/assets/WebImages/SprintTimeLines/ReIterate.png": "dfb75a8086e8ab38f648ce31bc4ef64a",
"assets/assets/WebImages/SprintTimeLines/Empathize.png": "f5dd331cd3de6209f002929fd9d90d8b",
"assets/assets/WebImages/SprintTimeLines/prototype.png": "df7c2e5c15cf9ca721ac4075d363fcb5",
"assets/assets/WebImages/SprintTimeLines/Ideation.png": "5f016038510c5d5406d95d77ebf7501a",
"assets/assets/WebImages/GreyAssets/ReIterateGrey.png": "10786bc9e57a59278b543899674895f9",
"assets/assets/WebImages/GreyAssets/UserTestingGrey.png": "b91e46bed85071fdc80b41b4a4f02abe",
"assets/assets/WebImages/GreyAssets/IdeationGrey.png": "8486a32025e461335554995cdcf1e47f",
"assets/assets/WebImages/GreyAssets/PrototypeGrey.png": "3c58e26fd539013da32b6eb34ad2037f",
"assets/assets/WebImages/ForgotPassIllustration.png": "3e4f9252c817b00282c1714ef3c7055f",
"assets/assets/WebImages/IdeationAssets/IvsFAnalysisTut.png": "426b59f1b66899714ba416da59dd73c4",
"assets/assets/WebImages/IdeationAssets/Crazy8.png": "abbf178185153e5dfd01a93c15aa274e",
"assets/assets/WebImages/IdeationAssets/IvsFAnalysis.png": "4a65ad85db9feb60107f0dafb90c8dc9",
"assets/assets/WebImages/UserTestingAssets/UserTestingTut.png": "d107bd8bd86f74b84b50f4860778a91b",
"assets/assets/WebImages/UserTestingAssets/MappingInsTut.png": "746668061174c80d5f6af9df4b16e8c5",
"assets/assets/WebImages/UserTestingAssets/mappingSights.png": "8866193f8c370ed65af138de7572b922",
"assets/assets/WebImages/UserTestingAssets/shadowing.png": "a00ee5cd5e6a19a785ad267dc127da60",
"assets/assets/WebImages/UserTestingAssets/UserInteview.png": "09ed97c1baa8d1e222fd00dad0c90423",
"assets/assets/WebImages/UserTestingAssets/ShadowingTut.png": "ff1ba5818c805d76867ca0ae14c92460",
"assets/assets/WebImages/Step1Goals.png": "df4d128c6fda7848703976922a7b046c",
"assets/assets/WebImages/Step3Goals.png": "180f9f42e3f5365935ba43120a0d7190",
"assets/assets/WebImages/LogoAppbar.png": "722b1620ebdc7baea05b5675592b305d",
"assets/assets/WebImages/Step2Goals.png": "c70c95438fe60bddee8113e69d4ca2da",
"assets/assets/WebImages/congratulations.png": "b8b12ae6252958c9cd99bfbc6909e2a4",
"assets/assets/WebImages/PrototypeAssets/prototypeTutorial.png": "b748ab2046f57696a3d02c8198f9d23f",
"assets/assets/WebImages/EmpathizeAssets/JourneyMap.png": "55c08793df58eb835bb5220ec8188e54",
"assets/assets/WebImages/EmpathizeAssets/CreatePersona.png": "71ceb6a642bd8c979bbd37d7029f62d6",
"assets/assets/WebImages/EmpathizeAssets/Persona.png": "0dc7c465631746825befa4da807320bf",
"assets/assets/WebImages/EmpathizeAssets/EmpJourneyMap.png": "68404e5d78f215adb8e53380e0a263b6",
"assets/assets/WebImages/EmpathizeAssets/EmpPersona.png": "212407b6f992d009aef3acf31d8ddc42",
"assets/assets/WebImages/EmpathizeAssets/EmpIdentifyPain.png": "275b7816e9c6f7b456a6f939ed3efd7b",
"assets/assets/WebImages/EmpathizeAssets/CreatePersona/PersonaDigital.png": "ed322d5b86d9782c7daab0166dcb64d0",
"assets/assets/WebImages/EmpathizeAssets/CreatePersona/CreatePersonaDigi.png": "a19bc80a98d5ad6aaf94170d0c3cda03",
"assets/assets/WebImages/EmpathizeAssets/CreatePersona/CreatPersonaPaper.png": "3cee5da56b544d87436ece59ca00d472",
"assets/assets/WebImages/EmpathizeAssets/CreatePersona/PersonalPaper.png": "14eaee262d0c1cb0413fa5f8f0407b86",
"assets/assets/WebImages/EmpathizeAssets/IdentifyPainPoints.png": "754c73070010de1956d36819c0bf35a9",
"assets/assets/WebImages/SoloMngteam.png": "49719467743d4ef6108fe97ab2048e86",
"assets/assets/WebImages/Tiles/bigPinkTile.png": "c81669804f426c4d172eabfd4cc430d6",
"assets/assets/WebImages/Tiles/OrangeWebTile.png": "73811dcc51a4a68dca1e153b3b041691",
"assets/assets/WebImages/Tiles/PurpleWebTile.png": "da5ee84e0f42e8731bd27b0622dcd551",
"assets/assets/WebImages/Tiles/30DaysTile.png": "b107ebd595c70598c62b046e9c00b0f5",
"assets/assets/WebImages/Tiles/14DaysTile.png": "0274877a695a8d9f48694b6ecbe6b60e",
"assets/assets/WebImages/Tiles/5DaysTile.png": "37a75efd990a4db8ce102be2987a4dd7",
"assets/assets/WebImages/SelectMngTeam.png": "51757ddf16bdc337640126238fed6a11",
"assets/assets/WebImages/LoginWebIllustration.png": "9f9047d2ebddc60437b68fe486ab7acf",
"assets/assets/WebImages/SignUpWebIllustration.png": "236f261cac7e21ce07ebbda752a2ffad",
"assets/assets/fonts/AvenirRegular.otf": "e899c1f1fe23835bfc27bb898ff94d8b",
"assets/assets/newlogo/newLogo.svg": "ffe356268127cd538200c61037c84696",
"assets/assets/blog/blog1.png": "b5ef9ebffa8c5d832d4b8e2976ad4224",
"assets/assets/blog/Screenshot%25202022-07-28%2520at%252011.38.23%2520PM.png": "03b527bdae913ccfae388c6dcbbb9b6b",
"assets/assets/blog/blog.png": "5d64f20f72f90348d614d73cd748f06d",
"assets/assets/blog/blog2.png": "f7dd88d4db4a8a2bd6d84fe66e9304bf",
"assets/assets/blog/Screenshot%25202022-07-28%2520at%252011.38.33%2520PM.png": "06625afb5eb038ff56cb499e1cd3ebb7",
"assets/assets/blog/Screenshot%25202022-07-28%2520at%252011.23.07%2520PM.png": "fc25effc8fc9595137e9409853f8f0be",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/shaders/ink_sparkle.frag": "0d0f951c66a1b2338d19003f85555792",
"assets/NOTICES": "66bd0247bd232e966f5b47dd49452b4d",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/progress_dialog_null_safe/assets/double_ring_loading_io.gif": "a03b96c4f7bef9fd9ed90eb516267a11",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"manifest.json": "7e5f4b598b1523929ac6187e99010ac9",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"index.html": "44118d473a8488364cfadc7d0a84e57a",
"/": "44118d473a8488364cfadc7d0a84e57a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "f5a2b38ae8e682677743fa9f3f0d1850"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
