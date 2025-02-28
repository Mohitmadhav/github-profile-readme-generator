//const baseURL = 'https://devicons.github.io/devicon/devicon.git/icons/';
const categorizedSkills = {
  language: {
    title: "Programming Languages",
    skills: [
      "c",
      "cplusplus",
      "csharp",
      "go",
      "java",
      "javascript",
      "typescript",
      "php",
      "ruby",
      "scala",
      "python",
      "swift",
      "objectivec",
      "clojure",
      "rust",
      "haskell",
    ],
  },

  frontend_dev: {
    title: "Frontend Development",
    skills: [
      "vuejs",
      "react",
      "svelte",
      "angularjs",
      "backbonejs",
      "bootstrap",
      "vuetify",
      "css3",
      "html5",
      "pug",
      "gulp",
      "sass",
      "redux",
      "webpack",
      "babel",
      "tailwind",
      "materialize",
      "bulma",
      "gtk",
      "qt",
      "wx_widgets",
      "ember",
    ],
  },

  backend_dev: {
    title: "Backend Development",
    skills: [
      "nodejs",
      "spring",
      "express",
      "graphql",
      "kafka",
      "solr",
      "rabbitMQ",
      "hadoop",
      "nginx",
    ],
  },

  mobile_dev: {
    title: "Mobile App Development",
    skills: [
      "android",
      "flutter",
      "dart",
      "kotlin",
      "nativescript",
      "xamarin",
      "reactnative",
      "ionic",
    ],
  },

  ai: {
    title: "AI/ML",
    skills: ["tensorflow", "pytorch", "opencv", "scikit_learn"],
  },

  database: {
    title: "Database",
    skills: [
      "mongodb",
      "mysql",
      "postgresql",
      "redis",
      "oracle",
      "cassandra",
      "couchdb",
      "hive",
      "realm",
      "mariadb",
      "cockroachdb",
      "elasticsearch",
    ],
  },

  data_visualization: {
    title: "Data Visualization",
    skills: ["d3js", "chartjs", "canvasjs", "kibana", "grafana"],
  },

  devops: {
    title: "Devops",
    skills: [
      "aws",
      "docker",
      "jenkins",
      "gcp",
      "kubernetes",
      "bash",
      "azure",
      "vagrant",
      "circleci"
    ],
  },

  baas: {
    title: "Backend as a Service(BaaS)",
    skills: ["firebase", "amplify"],
  },

  framework: {
    title: "Framework",
    skills: [
      "django",
      "dotnet",
      "electron",
      "symfony",
      "laravel",
      "codeigniter",
      "rails",
      "flask",
      "quasar"
    ],
  },

  testing: {
    title: "Testing",
    skills: [
      "cypress",
      "selenium",
      "jest",
      "mocha",
      "puppeteer",
      "karma",
      "jasmine",
    ],
  },

  software: {
    title: "Software",
    skills: [
      "illustrator",
      "photoshop",
      "xd",
      "figma",
      "blender",
      "sketch",
      "invision",
      "framer",
    ],
  },

  static_site_generator: {
    title: "Static Site Generators",
    skills: ["gatsby", "gridsome", "hugo", "jekyll", "nextjs", "nuxtjs"],
  },

  game_engines:{
    title: "Game Engines",
    skills: ["unity"],
  },

  other: {
    title: "Other",
    skills: ["linux", "git"],
  },
}

const icons = {
  vuejs:
    "https://devicons.github.io/devicon/devicon.git/icons/vuejs/vuejs-original-wordmark.svg",
  react:
    "https://devicons.github.io/devicon/devicon.git/icons/react/react-original-wordmark.svg",
  angularjs:
    "https://devicons.github.io/devicon/devicon.git/icons/angularjs/angularjs-original.svg",
  aws:
    "https://devicons.github.io/devicon/devicon.git/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  android:
    "https://devicons.github.io/devicon/devicon.git/icons/android/android-original-wordmark.svg",
  backbonejs:
    "https://devicons.github.io/devicon/devicon.git/icons/backbonejs/backbonejs-original-wordmark.svg",
  bootstrap:
    "https://devicons.github.io/devicon/devicon.git/icons/bootstrap/bootstrap-plain.svg",
  c: "https://devicons.github.io/devicon/devicon.git/icons/c/c-original.svg",
  canvasjs:
    "https://raw.githubusercontent.com/Hardik0307/Hardik0307/master/assets/canvasjs-charts.svg",
  coffeescript:
    "https://devicons.github.io/devicon/devicon.git/icons/coffeescript/coffeescript-original-wordmark.svg",
  codeigniter: "https://cdn.worldvectorlogo.com/logos/codeigniter.svg",
  cplusplus:
    "https://devicons.github.io/devicon/devicon.git/icons/cplusplus/cplusplus-original.svg",
  css3:
    "https://devicons.github.io/devicon/devicon.git/icons/css3/css3-original-wordmark.svg",
  csharp:
    "https://devicons.github.io/devicon/devicon.git/icons/csharp/csharp-original.svg",
  d3js:
    "https://devicons.github.io/devicon/devicon.git/icons/d3js/d3js-original.svg",
  django:
    "https://devicons.github.io/devicon/devicon.git/icons/django/django-original.svg",
  docker:
    "https://devicons.github.io/devicon/devicon.git/icons/docker/docker-original-wordmark.svg",
  dotnet:
    "https://devicons.github.io/devicon/devicon.git/icons/dot-net/dot-net-original-wordmark.svg",
  electron:
    "https://devicons.github.io/devicon/devicon.git/icons/electron/electron-original.svg",
  express:
    "https://devicons.github.io/devicon/devicon.git/icons/express/express-original-wordmark.svg",
  go: "https://devicons.github.io/devicon/devicon.git/icons/go/go-original.svg",
  graphql: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
  gulp:
    "https://devicons.github.io/devicon/devicon.git/icons/gulp/gulp-plain.svg",
  html5:
    "https://devicons.github.io/devicon/devicon.git/icons/html5/html5-original-wordmark.svg",
  hugo: "https://api.iconify.design/logos-hugo.svg",
  java:
    "https://devicons.github.io/devicon/devicon.git/icons/java/java-original-wordmark.svg",
  javascript:
    "https://devicons.github.io/devicon/devicon.git/icons/javascript/javascript-original.svg",
  ionic: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Ionic_Logo.svg",
  laravel:
    "https://devicons.github.io/devicon/devicon.git/icons/laravel/laravel-plain-wordmark.svg",
  meteor:
    "https://devicons.github.io/devicon/devicon.git/icons/meteor/meteor-original-wordmark.svg",
  mongodb:
    "https://devicons.github.io/devicon/devicon.git/icons/mongodb/mongodb-original-wordmark.svg",
  mysql:
    "https://devicons.github.io/devicon/devicon.git/icons/mysql/mysql-original-wordmark.svg",
  nginx:
    "https://devicons.github.io/devicon/devicon.git/icons/nginx/nginx-original.svg",
  nodejs:
    "https://devicons.github.io/devicon/devicon.git/icons/nodejs/nodejs-original-wordmark.svg",
  oracle:
    "https://devicons.github.io/devicon/devicon.git/icons/oracle/oracle-original.svg",
  photoshop:
    "https://devicons.github.io/devicon/devicon.git/icons/photoshop/photoshop-plain.svg",
  xd:
    "https://cdn.worldvectorlogo.com/logos/adobe-xd.svg",
  php:
    "https://devicons.github.io/devicon/devicon.git/icons/php/php-original.svg",
  postgresql:
    "https://devicons.github.io/devicon/devicon.git/icons/postgresql/postgresql-original-wordmark.svg",
  python:
    "https://devicons.github.io/devicon/devicon.git/icons/python/python-original.svg",
  rails:
    "https://devicons.github.io/devicon/devicon.git/icons/rails/rails-original-wordmark.svg",
  redis:
    "https://devicons.github.io/devicon/devicon.git/icons/redis/redis-original-wordmark.svg",
  ruby:
    "https://devicons.github.io/devicon/devicon.git/icons/ruby/ruby-original-wordmark.svg",
  rust:
    "https://devicons.github.io/devicon/devicon.git/icons/rust/rust-plain.svg",
  sass:
    "https://devicons.github.io/devicon/devicon.git/icons/sass/sass-original.svg",
  scala:
    "https://devicons.github.io/devicon/devicon.git/icons/scala/scala-original-wordmark.svg",
  symfony: "https://symfony.com/logos/symfony_black_03.svg",
  spring: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg",
  swift:
    "https://devicons.github.io/devicon/devicon.git/icons/swift/swift-original-wordmark.svg",
  typescript:
    "https://devicons.github.io/devicon/devicon.git/icons/typescript/typescript-original.svg",
  linux:
    "https://devicons.github.io/devicon/devicon.git/icons/linux/linux-original.svg",
  redux:
    "https://devicons.github.io/devicon/devicon.git/icons/redux/redux-original.svg",
  webpack:
    "https://devicons.github.io/devicon/devicon.git/icons/webpack/webpack-original.svg",
  flutter: "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
  dart: "https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg",
  kotlin: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
  tensorflow:
    "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
  chartjs: "https://www.chartjs.org/media/logo-title.svg",
  jenkins: "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
  gcp: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
  kubernetes:
    "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
  azure:
    "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
  git: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  kafka: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
  solr: "https://www.vectorlogo.zone/logos/apache_solr/apache_solr-icon.svg",
  cassandra:
    "https://www.vectorlogo.zone/logos/apache_cassandra/apache_cassandra-icon.svg",
  rabbitMQ: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg",
  hadoop:
    "https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg",
  bash: "https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg",
  pytorch: "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
  opencv: "https://www.vectorlogo.zone/logos/opencv/opencv-icon.svg",
  illustrator:
    "https://www.vectorlogo.zone/logos/adobe_illustrator/adobe_illustrator-icon.svg",
  figma: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
  blender:
    "https://download.blender.org/branding/community/blender_community_badge_white.svg",
  babel: "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg",
  sketch: "https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg",
  flask: "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg",
  nativescript:
    "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/nativescript.svg",
  xamarin:
    "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/xamarin.svg",
  vagrant: "https://www.vectorlogo.zone/logos/vagrantup/vagrantup-icon.svg",
  tailwind:
    "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  materialize:
    "https://raw.githubusercontent.com/prplx/svg-logos/5585531d45d294869c4eaab4d7cf2e9c167710a9/svg/materialize.svg",
  invision:
    "https://www.vectorlogo.zone/logos/invisionapp/invisionapp-icon.svg",
  framer: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
  bulma:
    "https://raw.githubusercontent.com/gilbarbara/logos/804dc257b59e144eaca5bc6ffd16949752c6f789/logos/bulma.svg",
  couchdb:
    "https://raw.githubusercontent.com/devicons/devicon/0d6c64dbbf311879f7d563bfc3ccf559f9ed111c/icons/couchdb/couchdb-original.svg",
  firebase: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
  amplify: "https://docs.amplify.aws/assets/logo-dark.svg",
  hive: "https://www.vectorlogo.zone/logos/apache_hive/apache_hive-icon.svg",
  realm:
    "https://raw.githubusercontent.com/bestofjs/bestofjs-webui/8665e8c267a0215f3159df28b33c365198101df5/public/logos/realm.svg",
  gatsby: "https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg",
  gridsome: "https://www.vectorlogo.zone/logos/gridsome/gridsome-icon.svg",
  nuxtjs: "https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg",
  jekyll: "https://www.vectorlogo.zone/logos/jekyllrb/jekyllrb-icon.svg",
  nextjs: "https://cdn.worldvectorlogo.com/logos/nextjs-3.svg",
  reactnative: "https://reactnative.dev/img/header_logo.svg",
  mariadb: "https://www.vectorlogo.zone/logos/mariadb/mariadb-icon.svg",
  cockroachdb:  "https://worldvectorlogo.com/es/download/cockroachdb.svg",
  objectivec:
    "https://www.vectorlogo.zone/logos/apple_objectivec/apple_objectivec-icon.svg",
  clojure:
    "https://upload.wikimedia.org/wikipedia/commons/5/5d/Clojure_logo.svg",
  haskell:
    "https://upload.wikimedia.org/wikipedia/commons/1/1c/Haskell-Logo.svg",
  svelte: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg",
  vuetify: "https://bestofjs.org/logos/vuetify.svg",
  pug: "https://cdn.worldvectorlogo.com/logos/pug.svg",
  mocha: "https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg",
  jest: "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
  cypress:
    "https://raw.githubusercontent.com/simple-icons/simple-icons/6e46ec1fc23b60c8fd0d2f2ff46db82e16dbd75f/icons/cypress.svg",
  selenium:
    "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/selenium-logo.svg",
  puppeteer: "https://www.vectorlogo.zone/logos/pptrdev/pptrdev-official.svg",
  karma:
    "https://raw.githubusercontent.com/detain/svg-logos/780f25886640cef088af994181646db2f6b1a3f8/svg/karma.svg",
  jasmine: "https://www.vectorlogo.zone/logos/jasmine/jasmine-icon.svg",
  gtk: "https://upload.wikimedia.org/wikipedia/commons/7/71/GTK_logo.svg",
  qt: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Qt_logo_2016.svg",
  wx_widgets:
    "https://upload.wikimedia.org/wikipedia/commons/b/bb/WxWidgets.svg",
  ember:
    "https://devicons.github.io/devicon/devicon.git/icons/ember/ember-original-wordmark.svg",
  scikit_learn:
    "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  quasar:
    "https://cdn.quasar.dev/logo/svg/quasar-logo.svg",
  kibana:
    "https://www.vectorlogo.zone/logos/elasticco_kibana/elasticco_kibana-icon.svg",
  grafana:
    "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg",
  elasticsearch:
    "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg",
  circleci:
    "https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg",
  unity:
    "https://www.vectorlogo.zone/logos/unity3d/unity3d-icon.svg"
}

const skillWebsites = {
  vuejs: "https://vuejs.org/",
  react: "https://reactjs.org/",
  angularjs: "https://angular.io",
  aws: "https://aws.amazon.com",
  android: "https://developer.android.com",
  backbonejs: "https://backbonejs.org",
  bootstrap: "https://getbootstrap.com",
  c: "https://www.cprogramming.com/",
  canvasjs: "https://canvasjs.com",
  coffeescript: "https://offeescript.org",
  codeigniter: "https://codeigniter.com",
  cplusplus: "https://www.w3schools.com/cpp/",
  css3: "https://www.w3schools.com/css/",
  csharp: "https://www.w3schools.com/cs/",
  d3js: "https://d3js.org/",
  django: "https://www.djangoproject.com/",
  docker: "https://www.docker.com/",
  dotnet: "https://dotnet.microsoft.com/",
  electron: "https://www.electronjs.org",
  express: "https://expressjs.com",
  go: "https://golang.org",
  graphql: "https://graphql.org",
  gulp: "https://gulpjs.com",
  html5: "https://www.w3.org/html/",
  hugo: "https://gohugo.io/",
  java: "https://www.java.com",
  javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  ionic: "https://ionicframework.com",
  laravel: "https://laravel.com/",
  meteor: "https://www.meteor.com/",
  mongodb: "https://www.mongodb.com/",
  mysql: "https://www.mysql.com/",
  nginx: "https://www.nginx.com",
  nodejs: "https://nodejs.org",
  oracle: "https://www.oracle.com/",
  photoshop: "https://www.photoshop.com/en",
  xd: "https://www.adobe.com/products/xd.html",
  php: "https://www.php.net",
  postgresql: "https://www.postgresql.org",
  python: "https://www.python.org",
  rails: "https://rubyonrails.org",
  redis: "https://redis.io",
  ruby: "https://www.ruby-lang.org/en/",
  rust: "https://www.rust-lang.org",
  sass: "https://sass-lang.com",
  scala: "https://www.scala-lang.org",
  symfony: "https://symfony.com",
  spring: "",
  swift: "",
  typescript: "https://www.typescriptlang.org/",
  linux: "https://www.linux.org/",
  redux: "https://redux.js.org",
  webpack: "https://webpack.js.org",
  flutter: "https://flutter.dev",
  dart: "https://dart.dev",
  kotlin: "https://kotlinlang.org",
  tensorflow: "https://www.tensorflow.org",
  chartjs: "https://www.chartjs.org",
  jenkins: "https://www.jenkins.io",
  gcp: "https://cloud.google.com",
  kubernetes: "https://kubernetes.io",
  azure: "https://azure.microsoft.com/en-in/",
  git: "https://git-scm.com/",
  kafka: "https://kafka.apache.org/",
  solr: "https://lucene.apache.org/solr/",
  cassandra: "https://cassandra.apache.org/",
  rabbitMQ: "https://www.rabbitmq.com",
  hadoop: "https://hadoop.apache.org/",
  bash: "https://www.gnu.org/software/bash/",
  pytorch: "https://pytorch.org/",
  opencv: "https://opencv.org/",
  illustrator: "https://www.adobe.com/in/products/illustrator.html",
  figma: "https://www.figma.com/",
  blender: "",
  babel: "https://babeljs.io/",
  sketch: "https://www.sketch.com/",
  flask: "",
  nativescript: "https://nativescript.org/",
  xamarin: "https://dotnet.microsoft.com/apps/xamarin",
  vagrant: "",
  tailwind: "https://tailwindcss.com/",
  materialize: "https://materializecss.com/",
  invision: "https://www.invisionapp.com/",
  framer: "",
  bulma: "https://bulma.io/",
  couchdb: "",
  firebase: "https://firebase.google.com/",
  amplify: "https://aws.amazon.com/amplify/",
  hive: "",
  realm: "",
  gatsby: "https://www.gatsbyjs.com/",
  gridsome: "",
  nuxtjs: "https://nuxtjs.org/",
  jekyll: "https://jekyllrb.com/",
  nextjs: "https://nextjs.org/",
  reactnative: "https://reactnative.dev/",
  mariadb: "https://mariadb.org/",
  cockroachdb: "https://www.cockroachlabs.com/product/cockroachdb/",
  objectivec: "",
  clojure: "",
  haskell: "",
  svelte: "https://svelte.dev",
  vuetify: "https://vuetifyjs.com/en/",
  pug: "https://pugjs.org",
  mocha: "https://mochajs.org",
  jest: "https://jestjs.io",
  cypress: "https://www.cypress.io",
  selenium: "https://www.selenium.dev",
  puppeteer: "https://github.com/puppeteer/puppeteer",
  karma: "https://karma-runner.github.io/latest/index.html",
  jasmine: "https://jasmine.github.io/",
  gtk: "",
  qt: "",
  wx_widgets: "",
  ember: "",
  scikit_learn: "",
  quasar: "https://quasar.dev/",
  kibana: "https://www.elastic.co/kibana",
  grafana: "https://grafana.com",
  elasticsearch: "https://www.elastic.co",
  circleci: "https://circleci.com",
  unity: "https://unity.com/"
}

const initialSkillState = {}

const skillsArray = Object.keys(categorizedSkills).map(
  key => categorizedSkills[key].skills
)
const skills = [].concat.apply([], skillsArray).sort()

skills.forEach(skill => {
  initialSkillState[skill] = false
})

const categories = Object.keys(categorizedSkills)

export {
  initialSkillState,
  icons,
  skills,
  skillWebsites,
  categorizedSkills,
  categories,
}
