// 個性心理学クイズ アプリケーションロジック
(function () {
  "use strict";

  // カテゴリ定義
  const CATEGORIES = {
    groups: { name: "3グループ編", description: "SUN・EARTH・MOONの特徴と力関係", icon: "🌍" },
    animals: { name: "12動物 特性編", description: "各動物の性格・行動パターン・ステージ", icon: "🦁" },
    classification: { name: "分類軸編", description: "未来/過去・右脳/左脳・目標/状況の分類", icon: "📊" },
    mistakes: { name: "ミスの傾向編", description: "各動物のミスパターンと特徴", icon: "⚡" },
    total: { name: "総合編", description: "全カテゴリからランダム出題", icon: "🏆" }
  };

  const QUESTIONS_PER_QUIZ = 10;

  // アプリ状態
  let state = {
    currentScreen: "top",
    currentCategory: null,
    questions: [],
    currentIndex: 0,
    score: 0,
    answered: false,
    wrongAnswers: [],
    userAnswers: []
  };

  // DOM要素キャッシュ
  const $ = (id) => document.getElementById(id);

  // 配列シャッフル（Fisher-Yates）
  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // クイズ問題を抽出
  function pickQuestions(category) {
    let pool;
    if (category === "total") {
      pool = [
        ...QUIZ_DATA.groups,
        ...QUIZ_DATA.animals,
        ...QUIZ_DATA.classification,
        ...QUIZ_DATA.mistakes
      ];
    } else {
      pool = QUIZ_DATA[category];
    }
    return shuffle(pool).slice(0, QUESTIONS_PER_QUIZ);
  }

  // トップ画面の描画
  function renderTop() {
    $("top-screen").classList.remove("hidden");
    $("quiz-screen").classList.add("hidden");
    $("result-screen").classList.add("hidden");
    state.currentScreen = "top";
  }

  // カテゴリ選択
  function selectCategory(category) {
    state.currentCategory = category;
    state.questions = pickQuestions(category);
    state.currentIndex = 0;
    state.score = 0;
    state.answered = false;
    state.wrongAnswers = [];
    state.userAnswers = [];
    renderQuiz();
  }

  // クイズ画面の描画
  function renderQuiz() {
    $("top-screen").classList.add("hidden");
    $("quiz-screen").classList.remove("hidden");
    $("result-screen").classList.add("hidden");
    state.currentScreen = "quiz";

    const q = state.questions[state.currentIndex];
    const categoryInfo = CATEGORIES[state.currentCategory];

    // ヘッダー
    $("quiz-category").textContent = categoryInfo.icon + " " + categoryInfo.name;
    $("quiz-progress").textContent = (state.currentIndex + 1) + " / " + state.questions.length;
    $("progress-fill").style.width = ((state.currentIndex + 1) / state.questions.length * 100) + "%";

    // 問題文
    $("question-text").textContent = q.question;

    // 選択肢エリア
    const choicesEl = $("choices");
    choicesEl.innerHTML = "";
    state.answered = false;
    $("feedback").classList.add("hidden");
    $("next-btn").classList.add("hidden");

    if (q.type === "choice") {
      q.choices.forEach(function (choice, i) {
        const btn = document.createElement("button");
        btn.className = "choice-btn";
        btn.textContent = choice;
        btn.addEventListener("click", function () {
          handleAnswer(i);
        });
        choicesEl.appendChild(btn);
      });
    } else {
      // ○×問題
      var tfContainer = document.createElement("div");
      tfContainer.className = "tf-container";

      var btnTrue = document.createElement("button");
      btnTrue.className = "choice-btn tf-btn tf-true";
      btnTrue.textContent = "⭕ ○";
      btnTrue.addEventListener("click", function () {
        handleAnswer(true);
      });

      var btnFalse = document.createElement("button");
      btnFalse.className = "choice-btn tf-btn tf-false";
      btnFalse.textContent = "❌ ×";
      btnFalse.addEventListener("click", function () {
        handleAnswer(false);
      });

      tfContainer.appendChild(btnTrue);
      tfContainer.appendChild(btnFalse);
      choicesEl.appendChild(tfContainer);
    }
  }

  // 回答処理
  function handleAnswer(selected) {
    if (state.answered) return;
    state.answered = true;

    const q = state.questions[state.currentIndex];
    const isCorrect = selected === q.answer;
    const choicesEl = $("choices");

    if (isCorrect) {
      state.score++;
    } else {
      state.wrongAnswers.push({
        question: q.question,
        type: q.type,
        userAnswer: selected,
        correctAnswer: q.answer,
        choices: q.choices || null,
        explanation: q.explanation
      });
    }

    state.userAnswers.push(selected);

    // ボタン状態の更新
    if (q.type === "choice") {
      var buttons = choicesEl.querySelectorAll(".choice-btn");
      buttons.forEach(function (btn, i) {
        btn.disabled = true;
        if (i === q.answer) {
          btn.classList.add("correct");
        } else if (i === selected && !isCorrect) {
          btn.classList.add("wrong");
        }
      });
    } else {
      var tfButtons = choicesEl.querySelectorAll(".tf-btn");
      tfButtons.forEach(function (btn) {
        btn.disabled = true;
        var btnValue = btn.classList.contains("tf-true");
        if (btnValue === q.answer) {
          btn.classList.add("correct");
        } else if (btnValue === selected && !isCorrect) {
          btn.classList.add("wrong");
        }
      });
    }

    // フィードバック
    var feedbackEl = $("feedback");
    feedbackEl.classList.remove("hidden");
    feedbackEl.className = "feedback " + (isCorrect ? "feedback-correct" : "feedback-wrong");
    $("feedback-label").textContent = isCorrect ? "正解！" : "不正解…";
    $("feedback-explanation").textContent = q.explanation;

    $("next-btn").classList.remove("hidden");
  }

  // 次の問題へ
  function nextQuestion() {
    state.currentIndex++;
    if (state.currentIndex >= state.questions.length) {
      renderResult();
    } else {
      renderQuiz();
    }
  }

  // 結果画面の描画
  function renderResult() {
    $("top-screen").classList.add("hidden");
    $("quiz-screen").classList.add("hidden");
    $("result-screen").classList.remove("hidden");
    state.currentScreen = "result";

    var rate = Math.round(state.score / state.questions.length * 100);
    $("result-score").textContent = state.score + " / " + state.questions.length;
    $("result-rate").textContent = rate + "%";

    // 評価メッセージ
    var msg;
    if (rate === 100) {
      msg = "パーフェクト！完璧な理解です！";
    } else if (rate >= 80) {
      msg = "素晴らしい！よく理解しています！";
    } else if (rate >= 60) {
      msg = "いい調子！もう少しで完璧です！";
    } else if (rate >= 40) {
      msg = "まだまだ伸びしろあり！復習しましょう！";
    } else {
      msg = "基礎からしっかり復習しましょう！";
    }
    $("result-message").textContent = msg;

    // 結果の円グラフ風表示
    var circle = $("result-circle");
    circle.style.background = "conic-gradient(var(--primary) " + (rate * 3.6) + "deg, var(--bg-secondary) 0deg)";

    // 間違えた問題一覧
    var reviewEl = $("review-list");
    reviewEl.innerHTML = "";

    if (state.wrongAnswers.length === 0) {
      var p = document.createElement("p");
      p.className = "review-perfect";
      p.textContent = "全問正解！間違えた問題はありません。";
      reviewEl.appendChild(p);
    } else {
      state.wrongAnswers.forEach(function (w, i) {
        var item = document.createElement("div");
        item.className = "review-item";

        var qText = document.createElement("div");
        qText.className = "review-question";
        qText.textContent = "Q" + (i + 1) + ". " + w.question;

        var answerInfo = document.createElement("div");
        answerInfo.className = "review-answer";

        var yourAnswer;
        var correctAnswer;

        if (w.type === "choice") {
          yourAnswer = w.choices[w.userAnswer];
          correctAnswer = w.choices[w.correctAnswer];
        } else {
          yourAnswer = w.userAnswer ? "○" : "×";
          correctAnswer = w.correctAnswer ? "○" : "×";
        }

        answerInfo.innerHTML =
          '<span class="your-answer">あなたの回答: ' + yourAnswer + '</span>' +
          '<span class="correct-answer">正解: ' + correctAnswer + '</span>';

        var expText = document.createElement("div");
        expText.className = "review-explanation";
        expText.textContent = w.explanation;

        item.appendChild(qText);
        item.appendChild(answerInfo);
        item.appendChild(expText);
        reviewEl.appendChild(item);
      });
    }
  }

  // イベントリスナー登録
  function init() {
    // カテゴリボタン
    var categoryBtns = document.querySelectorAll("[data-category]");
    categoryBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        selectCategory(btn.dataset.category);
      });
    });

    // 次の問題ボタン
    $("next-btn").addEventListener("click", nextQuestion);

    // もう一度ボタン
    $("retry-btn").addEventListener("click", function () {
      selectCategory(state.currentCategory);
    });

    // カテゴリ選択に戻るボタン
    $("back-btn").addEventListener("click", renderTop);

    // 初期表示
    renderTop();
  }

  // DOM読み込み後に初期化
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
