SplitText.create(".split1", {
  type: "lines, chars",
  mask: "lines", //글자들이 화면 아래쪽이 아닌 라인에 맞춰서 올라오는 것 처럼 mask함
  autoSplit: true, //요소가 화면에 보이면 텍스트를 분할하여 애니메이션 실행 (최적화)
  onSplit(self) {
    return gsap.from(self.chars, {
      duration: 2,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
    });
  },
});
SplitText.create(".split2", {
  type: "lines, words",
  mask: "lines",
  autoSplit: true,
  onSplit(self) {
    return gsap.from(self.words, {
      duration: 2,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
    });
  },
});
SplitText.create(".split3", {
  type: "lines",
  mask: "lines",
  autoSplit: true,
  onSplit(self) {
    return gsap.from(self.lines, {
      duration: 2,
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
    });
  },
});
SplitText.create(".split4", {
  type: "chars",
  autoSplit: true,
  onSplit(self) {
    return gsap.from(self.chars, {
      duration: 2,
      y: 100,
      autoAlpha: 0,
      stagger: {
        amount: 0.5,
        from: "random",
      },
    });
  },
});
SplitText.create(".split5 h1", {
  type: "chars",
  autoSplit: true,
  linesClass: "lines++",
  onSplit(self) {
    return gsap.from(self.chars, {
      duration: 2,
      y: 100,
      autoAlpha: 0,
      stagger: {
        amount: 0.5,
        from: "center",
        grid: "auto",
      },
    });
  },
});
