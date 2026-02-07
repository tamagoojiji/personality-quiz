// 個性心理学クイズ データ
const QUIZ_DATA = {
  // カテゴリ1: 3グループ編（SUN/EARTH/MOON）
  groups: [
    // 4択問題
    {
      type: "choice",
      question: "「すごい」「絶対」「面倒くさい」が口癖なのはどのグループ？",
      choices: ["SUN", "EARTH", "MOON", "満月"],
      answer: 0,
      explanation: "SUNグループの口癖は「すごい」「絶対」「面倒くさい」です。"
    },
    {
      type: "choice",
      question: "「一生懸命」「納得」が口癖なのはどのグループ？",
      choices: ["EARTH", "SUN", "MOON", "新月"],
      answer: 0,
      explanation: "EARTHグループの口癖は「一生懸命」「納得」です。"
    },
    {
      type: "choice",
      question: "「なんで〜？」「どうして〜？」が口癖なのはどのグループ？",
      choices: ["MOON", "SUN", "EARTH", "満月"],
      answer: 0,
      explanation: "MOONグループの口癖は「なんで〜？」「どうして〜？」です。"
    },
    {
      type: "choice",
      question: "SUNグループの柱はどれ？",
      choices: ["完了", "目的", "調和", "自由"],
      answer: 0,
      explanation: "SUNグループの柱は「完了」です。物事を進める・終わらせるのが得意です。"
    },
    {
      type: "choice",
      question: "EARTHグループの柱はどれ？",
      choices: ["目的", "完了", "調和", "達成"],
      answer: 0,
      explanation: "EARTHグループの柱は「目的」です。目的を考え、達成する計画を立てるのが得意です。"
    },
    {
      type: "choice",
      question: "MOONグループが目指すのはどれ？",
      choices: ["人格者", "成功者", "財産家", "実力者"],
      answer: 0,
      explanation: "MOONグループが目指すのは「人格者」です。人との関わりを大切にします。"
    },
    {
      type: "choice",
      question: "SUNグループが目指すのはどれ？",
      choices: ["成功者", "財産家", "人格者", "努力家"],
      answer: 0,
      explanation: "SUNグループが目指すのは「成功者」です。可能性を大切にし、世の中に広めていきます。"
    },
    {
      type: "choice",
      question: "EARTHグループが目指すのはどれ？",
      choices: ["財産家", "成功者", "人格者", "挑戦者"],
      answer: 0,
      explanation: "EARTHグループが目指すのは「財産家」です。自分の夢を大切にし、形を作ります。"
    },
    {
      type: "choice",
      question: "3分類で最も人口比率が高いのはどのグループ？",
      choices: ["EARTH（約40%）", "MOON（約35%）", "SUN（約25%）", "どれも同じ"],
      answer: 0,
      explanation: "EARTHグループが約40%で最も多く、次いでMOON約35%、SUN約25%です。"
    },
    {
      type: "choice",
      question: "SUNグループが苦手なことはどれ？",
      choices: ["優先順位をつけること", "終わらせること", "効率よく進めること", "計画を立てること"],
      answer: 0,
      explanation: "SUNグループは物事を進める・終わらせるのは得意ですが、優先順位をつけることが苦手です。"
    },
    {
      type: "choice",
      question: "EARTHグループが苦手なことはどれ？",
      choices: ["終わらせること", "優先順位をつけること", "効率よく進めること", "人付き合い"],
      answer: 0,
      explanation: "EARTHグループは目的を考え計画を立てるのは得意ですが、終わらせることが苦手です。"
    },
    {
      type: "choice",
      question: "MOONグループが苦手なことはどれ？",
      choices: ["効率よく進めること", "優先順位をつけること", "終わらせること", "人と話すこと"],
      answer: 0,
      explanation: "MOONグループは良い雰囲気を作るのは得意ですが、効率よく進めることが苦手です。"
    },
    {
      type: "choice",
      question: "じゃんけんの法則で、MOONが影響を与えるのはどのグループ？",
      choices: ["EARTH", "SUN", "MOON", "どれにも影響しない"],
      answer: 0,
      explanation: "MOON→EARTHに影響（地球は月の影響を強く受けている）。MOONはグー（小さくまとまる）です。"
    },
    {
      type: "choice",
      question: "じゃんけんの法則で、EARTHが影響を与えるのはどのグループ？",
      choices: ["SUN", "MOON", "EARTH", "どれにも影響しない"],
      answer: 0,
      explanation: "EARTH→SUNに影響（地球上の全生命体は太陽のエネルギーを吸収して生きている）。EARTHはチョキ（不要なモノを切り取る）です。"
    },
    {
      type: "choice",
      question: "じゃんけんの法則で、SUNが影響を与えるのはどのグループ？",
      choices: ["MOON", "EARTH", "SUN", "どれにも影響しない"],
      answer: 0,
      explanation: "SUN→MOONに影響（太陽がなければ月は光り輝かない）。SUNはパー（外に向かって拡大展開する）です。"
    },
    {
      type: "choice",
      question: "じゃんけんの法則で、SUNの手はどれ？",
      choices: ["パー（外に向かって拡大展開）", "グー（小さくまとまる）", "チョキ（不要なモノを切り取る）", "決まっていない"],
      answer: 0,
      explanation: "SUNの手は「パー」です。外に向かって拡大展開するイメージです。"
    },
    {
      type: "choice",
      question: "SUNグループの特徴として正しいのはどれ？",
      choices: ["ムラがある", "ムリをする", "ムダが多い", "ムシする"],
      answer: 0,
      explanation: "SUNグループは「ムラがある」のが特徴です。EARTHは「ムリをする」、MOONは「ムダが多い」です。"
    },
    {
      type: "choice",
      question: "EARTHグループに必要なものはどれ？",
      choices: ["夢を具体的に実現できるもの", "可能性をすぐに実現できるもの", "信頼関係を築いていくこと", "自由な環境"],
      answer: 0,
      explanation: "EARTHグループには「夢を具体的に実現できるもの」が必要です。自分の夢を大切にします。"
    },
    // ○×問題
    {
      type: "trueFalse",
      question: "MOONグループの柱は「調和」である。",
      answer: true,
      explanation: "正解です。MOONグループの柱は「調和」で、ケンカしたくない・人間らしく生きたいという特徴があります。"
    },
    {
      type: "trueFalse",
      question: "SUNグループの人口比率は約40%で最も多い。",
      answer: false,
      explanation: "SUNグループの人口比率は約25%で最も少ないです。最も多いのはEARTHの約40%です。"
    },
    {
      type: "trueFalse",
      question: "EARTHグループの特徴は「ムリをする」である。",
      answer: true,
      explanation: "正解です。EARTHは「ムリをする」、SUNは「ムラがある」、MOONは「ムダが多い」です。"
    },
    {
      type: "trueFalse",
      question: "MOONグループの特徴は「ムラがある」である。",
      answer: false,
      explanation: "MOONグループの特徴は「ムダが多い」です。「ムラがある」はSUNグループの特徴です。"
    },
    {
      type: "trueFalse",
      question: "SUNグループは「物事を進める・終わらせる」のが得意である。",
      answer: true,
      explanation: "正解です。SUNグループは物事を進める・終わらせる、タスク処理、華やかで目立つことが得意です。"
    },
  ],

  // カテゴリ2: 12動物 特性編
  animals: [
    // 4択問題
    {
      type: "choice",
      question: "「気分屋さんな天才肌」と表現される動物はどれ？",
      choices: ["ペガサス", "チーター", "ライオン", "黒ひょう"],
      answer: 0,
      explanation: "ペガサスは「気分屋さんな天才肌」で、発想力やアイディアに優れ、華があり注目を集めます。"
    },
    {
      type: "choice",
      question: "「取り掛かりがとにかく早い」のが特徴の動物はどれ？",
      choices: ["チーター", "ペガサス", "猿", "狼"],
      answer: 0,
      explanation: "チーターは取り掛かりがとにかく早く、ポジティブ思考でどんどんチャレンジします。"
    },
    {
      type: "choice",
      question: "「やると決めたら徹底的にやり抜く」のが特徴の動物はどれ？",
      choices: ["ライオン", "虎", "ゾウ", "狼"],
      answer: 0,
      explanation: "ライオンはやると決めたら徹底的にやり抜きます。ズルや小細工が嫌いで、王道こそ我が道です。"
    },
    {
      type: "choice",
      question: "「友だち作りが大得意な愛されキャラ」と表現される動物はどれ？",
      choices: ["こじか", "ひつじ", "たぬき", "猿"],
      answer: 0,
      explanation: "こじかは「友だち作りが大得意な愛されキャラ」で、愛情深さが強みです。"
    },
    {
      type: "choice",
      question: "「グループのリーダー的存在」と表現される動物はどれ？",
      choices: ["黒ひょう", "ライオン", "虎", "ゾウ"],
      answer: 0,
      explanation: "黒ひょうはグループのリーダー的存在で、情報収集が得意で責任感が強いです。"
    },
    {
      type: "choice",
      question: "「周りから頼られ、安心感を与える存在」と表現される動物はどれ？",
      choices: ["たぬき", "ひつじ", "こじか", "コアラ"],
      answer: 0,
      explanation: "たぬきは周りから頼られ、安心感を与える存在です。出番を待ってるから控えめな印象です。"
    },
    {
      type: "choice",
      question: "「妄想を広げるロマンチスト」と表現される動物はどれ？",
      choices: ["コアラ", "ひつじ", "ペガサス", "狼"],
      answer: 0,
      explanation: "コアラは「妄想を広げるロマンチスト」で、アイディアや事業の構想を膨らますのが得意です。"
    },
    {
      type: "choice",
      question: "「自分の流儀やマイペースを大事にする」のが特徴の動物はどれ？",
      choices: ["狼", "猿", "虎", "コアラ"],
      answer: 0,
      explanation: "狼は自分の流儀やマイペースを大事にし、1人になれる時間と空間が必要です。"
    },
    {
      type: "choice",
      question: "「損得計算やメリデメ比較が得意」な動物はどれ？",
      choices: ["猿", "虎", "コアラ", "チーター"],
      answer: 0,
      explanation: "猿は損得計算やメリデメ比較が得意で、目の前の結果のためなら驚異的に頑張れます。"
    },
    {
      type: "choice",
      question: "「安定感とバランス感覚に優れたビジネスマン」と表現される動物はどれ？",
      choices: ["虎", "ライオン", "ゾウ", "狼"],
      answer: 0,
      explanation: "虎は安定感とバランス感覚に優れたビジネスマンで、義理人情に厚く博愛精神があります。"
    },
    {
      type: "choice",
      question: "「責任感と面倒見があって任せたくなる」と表現される動物はどれ？",
      choices: ["ひつじ", "たぬき", "こじか", "黒ひょう"],
      answer: 0,
      explanation: "ひつじは責任感と面倒見があり、気配りに重きを置いて調和を生み出します。"
    },
    {
      type: "choice",
      question: "「強い信念のもと実行力とやり切る力」が特徴の動物はどれ？",
      choices: ["ゾウ", "ライオン", "虎", "狼"],
      answer: 0,
      explanation: "ゾウは強い信念のもと実行力とやり切る力を持ち、歴史に残るスケールが大きなことに憧れます。"
    },
    {
      type: "choice",
      question: "スピリットステージが「胎児（魂）」の動物はどれ？",
      choices: ["ペガサス", "こじか", "狼", "コアラ"],
      answer: 0,
      explanation: "ペガサスのスピリットステージは「胎児（魂）」です。狼も「胎児」ですが「魂」はペガサスだけです。"
    },
    {
      type: "choice",
      question: "スピリットステージが「赤ちゃん」の動物はどれ？",
      choices: ["こじか", "ペガサス", "猿", "チーター"],
      answer: 0,
      explanation: "こじかのスピリットステージは「赤ちゃん」です。友だち作りが大得意な愛されキャラです。"
    },
    {
      type: "choice",
      question: "スピリットステージが「小学生」の動物はどれ？",
      choices: ["猿", "チーター", "こじか", "たぬき"],
      answer: 0,
      explanation: "猿のスピリットステージは「小学生」です。褒められるの大好きなお調子者です。"
    },
    {
      type: "choice",
      question: "スピリットステージが「中学生」の動物はどれ？",
      choices: ["チーター", "猿", "黒ひょう", "こじか"],
      answer: 0,
      explanation: "チーターのスピリットステージは「中学生」です。ポジティブ思考でどんどんチャレンジします。"
    },
    {
      type: "choice",
      question: "スピリットステージが「反抗期」の動物はどれ？",
      choices: ["黒ひょう", "チーター", "猿", "ライオン"],
      answer: 0,
      explanation: "黒ひょうのスピリットステージは「反抗期」です。正義感と筋を通すしっかりものです。"
    },
    {
      type: "choice",
      question: "スピリットステージが「棺桶」の動物はどれ？",
      choices: ["ひつじ", "コアラ", "ゾウ", "たぬき"],
      answer: 0,
      explanation: "ひつじのスピリットステージは「棺桶」です。人や社会のために馬力を出せます。"
    },
    {
      type: "choice",
      question: "行動パターンが「見る→やる」の動物はどれ？",
      choices: ["ペガサス", "チーター", "狼", "猿"],
      answer: 0,
      explanation: "ペガサスの行動パターンは「見る→やる」で、最もシンプルで直感的に動きます。"
    },
    {
      type: "choice",
      question: "行動パターンが「見る→思いつく→やる」の動物はどれ？",
      choices: ["狼", "ペガサス", "チーター", "猿"],
      answer: 0,
      explanation: "狼の行動パターンは「見る→思いつく→やる」です。自分の流儀やマイペースを大事にします。"
    },
    {
      type: "choice",
      question: "「心許せる人の前では猫になる」と言われる動物はどれ？",
      choices: ["ライオン", "虎", "黒ひょう", "こじか"],
      answer: 0,
      explanation: "ライオンは心許せる人の前では猫になり、甘えたいという一面があります。"
    },
    {
      type: "choice",
      question: "「財布を2つ持ってる」と言われる動物はどれ？",
      choices: ["ひつじ", "コアラ", "虎", "猿"],
      answer: 0,
      explanation: "ひつじは「財布を2つ持ってる」と言われます。自分用と人付き合い用を使い分けます。"
    },
    {
      type: "choice",
      question: "「猿真似の言葉通りなんでも器用にこなす」動物はどれ？",
      choices: ["猿", "チーター", "たぬき", "黒ひょう"],
      answer: 0,
      explanation: "猿は猿真似の言葉通り、なんでも器用にこなします。褒められるのが大好きなお調子者です。"
    },
    {
      type: "choice",
      question: "「全方位外交をして場面に応じて化ける」のが特徴の動物はどれ？",
      choices: ["たぬき", "ひつじ", "こじか", "黒ひょう"],
      answer: 0,
      explanation: "たぬきは全方位外交をして場面に応じて化けます。ノウハウや経験の吸収が得意です。"
    },
    {
      type: "choice",
      question: "SUNグループに属する動物の組み合わせとして正しいのはどれ？",
      choices: ["ペガサス・チーター・ライオン・ゾウ", "狼・猿・虎・コアラ", "こじか・黒ひょう・たぬき・ひつじ", "ペガサス・狼・こじか・猿"],
      answer: 0,
      explanation: "SUNグループはペガサス・チーター・ライオン・ゾウの4動物です。"
    },
    {
      type: "choice",
      question: "EARTHグループに属する動物の組み合わせとして正しいのはどれ？",
      choices: ["狼・猿・虎・コアラ", "ペガサス・チーター・ライオン・ゾウ", "こじか・黒ひょう・たぬき・ひつじ", "狼・チーター・虎・ひつじ"],
      answer: 0,
      explanation: "EARTHグループは狼・猿・虎・コアラの4動物です。"
    },
    {
      type: "choice",
      question: "MOONグループに属する動物の組み合わせとして正しいのはどれ？",
      choices: ["こじか・黒ひょう・たぬき・ひつじ", "ペガサス・チーター・ライオン・ゾウ", "狼・猿・虎・コアラ", "こじか・猿・たぬき・コアラ"],
      answer: 0,
      explanation: "MOONグループはこじか・黒ひょう・たぬき・ひつじの4動物です。"
    },
    // ○×問題
    {
      type: "trueFalse",
      question: "ペガサスの行動パターンは「見る→聞く→やる」である。",
      answer: false,
      explanation: "ペガサスの行動パターンは「見る→やる」です。聞くステップはなく、直感的に動きます。"
    },
    {
      type: "trueFalse",
      question: "チーターは諦めも早いという特徴がある。",
      answer: true,
      explanation: "正解です。チーターは取り掛かりが早い反面、諦めも早いという特徴があります。"
    },
    {
      type: "trueFalse",
      question: "ライオンのスピリットステージは「部長・社長」である。",
      answer: false,
      explanation: "ライオンのスピリットステージは「働き盛り」です。「部長・社長」は虎のステージです。"
    },
    {
      type: "trueFalse",
      question: "ゾウは「プロとしての報酬含めた評価を重視」する。",
      answer: true,
      explanation: "正解です。ゾウはプロとしての報酬含めた評価を重視し、手抜きや妥協の概念がありません。"
    },
    {
      type: "trueFalse",
      question: "こじかは駆け引きや計算が得意である。",
      answer: false,
      explanation: "こじかは駆け引きや計算が苦手です。愛情ど直球タイプで、相手を喜ばせる視点がドンピシャです。"
    },
    {
      type: "trueFalse",
      question: "黒ひょうは好き嫌いが激しく、嫌いな人はシャットアウトする。",
      answer: true,
      explanation: "正解です。黒ひょうはプライドが高く、好き嫌いが激しく嫌いな人はシャットアウトします。"
    },
    {
      type: "trueFalse",
      question: "たぬきのスピリットステージは「年金」である。",
      answer: false,
      explanation: "たぬきのスピリットステージは「会長」です。「年金」はコアラのステージです。"
    },
    {
      type: "trueFalse",
      question: "狼は人と同じが嫌いな天邪鬼（あまのじゃく）である。",
      answer: true,
      explanation: "正解です。狼は人と同じが嫌いな天邪鬼で、自分の流儀やマイペースを大事にします。"
    },
    {
      type: "trueFalse",
      question: "猿は長期戦が得意である。",
      answer: false,
      explanation: "猿は長期戦が苦手で、気力が切れます。目の前の結果のためなら驚異的に頑張れますが、短期集中型です。"
    },
    {
      type: "trueFalse",
      question: "虎は臨機応変な対応が得意である。",
      answer: false,
      explanation: "虎は臨機応変な対応が苦手です。計画を重視するあまり機会を失うこともあります。"
    },
    {
      type: "trueFalse",
      question: "コアラは計算と妄想は進むが、実行力に欠ける。",
      answer: true,
      explanation: "正解です。コアラはじっくりしっかり考える長期戦が得意ですが、計算と妄想は進むが実行力に欠けます。"
    },
    {
      type: "trueFalse",
      question: "ひつじは「同等の見返りがないとストレスになる」という特徴がある。",
      answer: true,
      explanation: "正解です。ひつじは人や社会のために馬力を出せますが、同等の見返りがないとストレスになります。"
    },
    {
      type: "trueFalse",
      question: "ゾウのスピリットステージは「働き盛り」である。",
      answer: false,
      explanation: "ゾウのスピリットステージは「人生の終盤」です。「働き盛り」はライオンのステージです。"
    },
  ],

  // カテゴリ3: 分類軸編
  classification: [
    // 4択問題
    {
      type: "choice",
      question: "次のうち「未来展望型」の動物はどれ？",
      choices: ["ペガサス", "虎", "ライオン", "コアラ"],
      answer: 0,
      explanation: "未来展望型は狼・ペガサス・こじか・猿・チーター・黒ひょうの6動物です。"
    },
    {
      type: "choice",
      question: "次のうち「過去回想型」の動物はどれ？",
      choices: ["虎", "狼", "ペガサス", "猿"],
      answer: 0,
      explanation: "過去回想型は虎・ライオン・たぬき・コアラ・ゾウ・ひつじの6動物です。"
    },
    {
      type: "choice",
      question: "次のうち「右脳型」の動物はどれ？",
      choices: ["ペガサス", "チーター", "猿", "虎"],
      answer: 0,
      explanation: "右脳型は狼・ペガサス・こじか・コアラ・ゾウ・ひつじの6動物です。イメージで物事を捉えます。"
    },
    {
      type: "choice",
      question: "次のうち「左脳型」の動物はどれ？",
      choices: ["チーター", "ペガサス", "コアラ", "ゾウ"],
      answer: 0,
      explanation: "左脳型は猿・チーター・黒ひょう・虎・ライオン・たぬきの6動物です。理屈や数字で物事を捉えます。"
    },
    {
      type: "choice",
      question: "次のうち「目標思考型」の動物はどれ？",
      choices: ["狼", "ペガサス", "チーター", "こじか"],
      answer: 0,
      explanation: "目標思考型は狼・猿・黒ひょう・コアラ・虎・ひつじの6動物です。ゴールからの逆算・計画が得意です。"
    },
    {
      type: "choice",
      question: "次のうち「状況対応型」の動物はどれ？",
      choices: ["ペガサス", "狼", "猿", "虎"],
      answer: 0,
      explanation: "状況対応型はペガサス・チーター・こじか・ゾウ・ライオン・たぬきの6動物です。今やることが中心です。"
    },
    {
      type: "choice",
      question: "4グループマトリクスで「太陽グループ（SUN）」はどの位置？",
      choices: ["自分軸 × 状況対応型", "相手軸 × 目標思考型", "自分軸 × 目標思考型", "相手軸 × 状況対応型"],
      answer: 0,
      explanation: "太陽グループは「自分軸 × 状況対応型」です。ペガサス・チーター・ライオン・ゾウが属します。"
    },
    {
      type: "choice",
      question: "4グループマトリクスで「満月グループ」に属する動物はどれ？",
      choices: ["黒ひょう・ひつじ", "こじか・たぬき", "狼・猿", "ペガサス・チーター"],
      answer: 0,
      explanation: "満月グループは「相手軸 × 目標思考型」で、黒ひょう・ひつじが属します。"
    },
    {
      type: "choice",
      question: "4グループマトリクスで「新月グループ」に属する動物はどれ？",
      choices: ["こじか・たぬき", "黒ひょう・ひつじ", "狼・猿", "ライオン・ゾウ"],
      answer: 0,
      explanation: "新月グループは「相手軸 × 状況対応型」で、こじか・たぬきが属します。"
    },
    {
      type: "choice",
      question: "未来展望型の特徴として正しいのはどれ？",
      choices: ["楽しいことが好きで楽観的", "不安なことが多くて慎重", "すごく先のことまで見通せる", "安心材料が大事"],
      answer: 0,
      explanation: "未来展望型は楽しいことが好きで楽観的、どうにかなると思ってる、期待材料が大事な人たちです。"
    },
    {
      type: "choice",
      question: "過去回想型の特徴として正しいのはどれ？",
      choices: ["不安なことが多くて慎重", "楽しいことが好きで楽観的", "あと先考えない", "目先のことに集中できる"],
      answer: 0,
      explanation: "過去回想型は不安なことが多くて慎重、間違ったらどうしようと思ってる、安心材料が大事な人たちです。"
    },
    {
      type: "choice",
      question: "右脳型が得意なことはどれ？",
      choices: ["イメージすること", "数的情報の処理", "箇条書き", "情報の整理"],
      answer: 0,
      explanation: "右脳型はイメージすること、相手にイメージさせる、図解やマインドマップが得意です。"
    },
    {
      type: "choice",
      question: "左脳型が得意なことはどれ？",
      choices: ["数的情報の処理", "イメージすること", "マインドマップ", "相手にイメージさせる"],
      answer: 0,
      explanation: "左脳型は数的情報の処理、情報の整理、箇条書きが得意です。"
    },
    {
      type: "choice",
      question: "ペガサスの分類軸の組み合わせとして正しいのはどれ？",
      choices: ["右脳・未来展望・状況対応", "左脳・未来展望・状況対応", "右脳・過去回想・状況対応", "右脳・未来展望・目標思考"],
      answer: 0,
      explanation: "ペガサスは右脳型・未来展望型・状況対応型（太陽グループ）です。"
    },
    {
      type: "choice",
      question: "虎の分類軸の組み合わせとして正しいのはどれ？",
      choices: ["左脳・過去回想・目標思考", "右脳・過去回想・目標思考", "左脳・未来展望・目標思考", "左脳・過去回想・状況対応"],
      answer: 0,
      explanation: "虎は左脳型・過去回想型・目標思考型（地球グループ）です。"
    },
    // ○×問題
    {
      type: "trueFalse",
      question: "ペガサスは左脳型である。",
      answer: false,
      explanation: "ペガサスは右脳型です。イメージで物事を捉え、発想力やアイディアに優れます。"
    },
    {
      type: "trueFalse",
      question: "チーターは未来展望型である。",
      answer: true,
      explanation: "正解です。チーターは未来展望型で、楽しいことが好きで楽観的です。"
    },
    {
      type: "trueFalse",
      question: "黒ひょうは目標思考型（満月グループ）である。",
      answer: true,
      explanation: "正解です。黒ひょうは目標思考型で、4グループマトリクスでは「相手軸 × 目標思考型」の満月グループに属します。"
    },
    {
      type: "trueFalse",
      question: "こじかは目標思考型である。",
      answer: false,
      explanation: "こじかは状況対応型です。4グループマトリクスでは「相手軸 × 状況対応型」の新月グループに属します。"
    },
    {
      type: "trueFalse",
      question: "コアラは右脳型である。",
      answer: true,
      explanation: "正解です。コアラは右脳型で、妄想を広げるロマンチストです。"
    },
    {
      type: "trueFalse",
      question: "たぬきは右脳型である。",
      answer: false,
      explanation: "たぬきは左脳型です。理屈や数字で物事を捉えます。"
    },
    {
      type: "trueFalse",
      question: "ライオンは未来展望型である。",
      answer: false,
      explanation: "ライオンは過去回想型です。何でも事前に知らないと不安な心配屋さんです。"
    },
    {
      type: "trueFalse",
      question: "猿は目標思考型である。",
      answer: true,
      explanation: "正解です。猿は目標思考型で、ゴールからの逆算・計画が得意です。EARTHグループに属します。"
    },
    {
      type: "trueFalse",
      question: "過去回想型は「目の前のチャンスを逃して後悔しがち」という特徴がある。",
      answer: true,
      explanation: "正解です。過去回想型はすごく先のことまで見通せる反面、目の前のチャンスを逃して後悔しがちです。"
    },
    {
      type: "trueFalse",
      question: "未来展望型は「安心材料が大事」である。",
      answer: false,
      explanation: "「安心材料が大事」なのは過去回想型です。未来展望型は「期待材料が大事」です。"
    },
  ],

  // カテゴリ4: ミスの傾向編
  mistakes: [
    // 4択問題
    {
      type: "choice",
      question: "「ミスを忘れるミス」をするのはどの動物？",
      choices: ["ペガサス", "チーター", "たぬき", "猿"],
      answer: 0,
      explanation: "ペガサスは「ミスを忘れるミス」をします。気分にムラがあり、聞く前に行動してミスもします。"
    },
    {
      type: "choice",
      question: "「ミスを完了してて（忘れて）ミス」をするのはどの動物？",
      choices: ["チーター", "ペガサス", "猿", "たぬき"],
      answer: 0,
      explanation: "チーターは「ミスを完了してて（忘れて）ミス」をします。過ぎたことは気にせず忘れる性格です。"
    },
    {
      type: "choice",
      question: "「心配して完璧を求めすぎてミス」をするのはどの動物？",
      choices: ["ライオン", "虎", "ひつじ", "コアラ"],
      answer: 0,
      explanation: "ライオンは「心配して完璧を求めすぎてミス」をします。何でも事前に知らないと不安な心配屋さんです。"
    },
    {
      type: "choice",
      question: "「肝心な話を聞いてなくてミス」をするのはどの動物？",
      choices: ["ゾウ", "ペガサス", "たぬき", "猿"],
      answer: 0,
      explanation: "ゾウは「肝心な話を聞いてなくてミス」をします。人の話や忠告が耳に入りにくい特徴があります。"
    },
    {
      type: "choice",
      question: "「良い格好を見せようとしてミス」をするのはどの動物？",
      choices: ["こじか", "黒ひょう", "たぬき", "ひつじ"],
      answer: 0,
      explanation: "こじかは「良い格好を見せようとしてミス」をします。八方美人になってストレスを貯めがちです。"
    },
    {
      type: "choice",
      question: "「言いにくいこと言わないでミス」をするのはどの動物？",
      choices: ["黒ひょう", "ひつじ", "たぬき", "こじか"],
      answer: 0,
      explanation: "黒ひょうは「言いにくいこと言わないでミス」をします。自分1人で解決しようとする傾向もあります。"
    },
    {
      type: "choice",
      question: "「ミスをばかしてミス」をするのはどの動物？",
      choices: ["たぬき", "猿", "こじか", "ひつじ"],
      answer: 0,
      explanation: "たぬきは「ミスをばかしてミス」をします。化けれるが故に誤解を生むことも。"
    },
    {
      type: "choice",
      question: "「意見を言わなすぎてミス」をするのはどの動物？",
      choices: ["ひつじ", "たぬき", "こじか", "黒ひょう"],
      answer: 0,
      explanation: "ひつじは「意見を言わなすぎてミス」をします。自分の本音はもこもこ毛皮で隠す特徴があります。"
    },
    {
      type: "choice",
      question: "「思いこみによる根本的なミス」をするのはどの動物？",
      choices: ["狼", "ペガサス", "猿", "チーター"],
      answer: 0,
      explanation: "狼は「思いこみによる根本的なミス」をします。ミスの概念がないこと自体がミスです。"
    },
    {
      type: "choice",
      question: "「自分自身のメリットばかり考えてミス」をするのはどの動物？",
      choices: ["猿", "虎", "コアラ", "チーター"],
      answer: 0,
      explanation: "猿は「自分自身のメリットばかり考えてミス」をします。目先の損得だけで決めつける傾向もあります。"
    },
    {
      type: "choice",
      question: "「考え整理してる間に期を失うミス」をするのはどの動物？",
      choices: ["虎", "コアラ", "ひつじ", "ライオン"],
      answer: 0,
      explanation: "虎は「考え整理してる間に期を失うミス」をします。計画を重視するあまり機会を失うことがあります。"
    },
    {
      type: "choice",
      question: "「思い描いたプランを理解されずにミス」をするのはどの動物？",
      choices: ["コアラ", "ゾウ", "ひつじ", "狼"],
      answer: 0,
      explanation: "コアラは「思い描いたプランを理解されずにミス」をします。計算と妄想は進むが実行力に欠けます。"
    },
    {
      type: "choice",
      question: "「自分を棚に上げすぎてミス」をするのはどの動物？",
      choices: ["ゾウ", "ライオン", "虎", "猿"],
      answer: 0,
      explanation: "ゾウは「自分を棚に上げすぎてミス」をします。人に怒ることができるのに自分を棚に上げがちです。"
    },
    {
      type: "choice",
      question: "「カッコつけて自信過剰・頑固でミス」をするのはどの動物？",
      choices: ["チーター", "ライオン", "ゾウ", "黒ひょう"],
      answer: 0,
      explanation: "チーターは「カッコつけて自信過剰・頑固でミス」をします。走り出したら止まれない性格です。"
    },
    {
      type: "choice",
      question: "「笑顔できついこと言ってミス」をするのはどの動物？",
      choices: ["虎", "ライオン", "黒ひょう", "ゾウ"],
      answer: 0,
      explanation: "虎は「笑顔できついこと言ってミス」をします。本質理解が強みなので、さらっと悪気なく厳しいセリフを吐きます。"
    },
    {
      type: "choice",
      question: "「感情を表に出したり感情で判断してミス」をするのはどの動物？",
      choices: ["黒ひょう", "ライオン", "ひつじ", "こじか"],
      answer: 0,
      explanation: "黒ひょうは「感情を表に出したり感情で判断してミス」をします。繊細な心の持ち主です。"
    },
    {
      type: "choice",
      question: "「返事だけ良くてミス」をするのはどの動物？",
      choices: ["たぬき", "こじか", "猿", "ひつじ"],
      answer: 0,
      explanation: "たぬきは「返事だけ良くてミス」をします。良くも悪くも返事がいい特徴があります。"
    },
    // ○×問題
    {
      type: "trueFalse",
      question: "ペガサスのミスの傾向に「テンションにむらがあってミス」がある。",
      answer: true,
      explanation: "正解です。ペガサスは気分にムラがあり、テンションの上下でミスをすることがあります。"
    },
    {
      type: "trueFalse",
      question: "チーターのミスの傾向に「慎重すぎてミス」がある。",
      answer: false,
      explanation: "チーターのミスは「早すぎてミス」です。慎重すぎるのではなく、取り掛かりが早すぎるのが原因です。"
    },
    {
      type: "trueFalse",
      question: "ライオンのミスの傾向に「他人にも厳しすぎてミス」がある。",
      answer: true,
      explanation: "正解です。ライオンは自分に厳しく、周りにも厳しいため、それがミスにつながることがあります。"
    },
    {
      type: "trueFalse",
      question: "狼のミスの傾向に「言葉足らずでミス」がある。",
      answer: true,
      explanation: "正解です。狼は前提を飛ばして言葉足らずになりがちで、それがミスにつながります。"
    },
    {
      type: "trueFalse",
      question: "こじかのミスの傾向に「マイペースすぎてミス」がある。",
      answer: false,
      explanation: "「マイペースなことがミス」は虎のミスの傾向です。こじかのミスは「良い格好を見せようとしてミス」「予算の見積もりが甘くてミス」などです。"
    },
    {
      type: "trueFalse",
      question: "猿のミスの傾向に「事後報告でミス」がある。",
      answer: false,
      explanation: "「事後報告でミス」はひつじのミスの傾向です。猿のミスは「自分自身のメリットばかり考えてミス」「目先の損得だけで決めつけてミス」などです。"
    },
    {
      type: "trueFalse",
      question: "ひつじのミスの傾向に「お節介の見返りを求めてミス」がある。",
      answer: true,
      explanation: "正解です。ひつじは面倒見が良い反面、同等の見返りがないとストレスになりミスにつながります。"
    },
    {
      type: "trueFalse",
      question: "コアラのミスの傾向に「早すぎてミス」がある。",
      answer: false,
      explanation: "「早すぎてミス」はチーターのミスの傾向です。コアラのミスは「結論を出すために慎重になりすぎてミス」「派閥をつくってミス」などです。"
    },
  ]
};
