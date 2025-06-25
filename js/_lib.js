// 상단이동
const moveTop = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// select-form 
const selectForm = {
  wrap: ".select-form",
  area: ".select-area",
  selected: ".selected",
  option: ".option",
  item: ".opt-item",
  init: function () {
    document.querySelectorAll(this.wrap).forEach((wrap) => {
      wrap.querySelector(this.selected).addEventListener("click", function () {
        selectForm.inactive();
        wrap.classList.toggle("active");
      });

      wrap.querySelectorAll(this.item).forEach((item) => {
        item.addEventListener("click", function () {
          selectForm.optionSelect(item);
        });
      });
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest(selectForm.wrap)) {
        selectForm.inactive();
      }
    });
  },
  inactive: function (wrap) {
    if (wrap) {
      wrap.classList.remove("active");
    } else {
      document.querySelectorAll(this.wrap + ".active").forEach((activeWrap) => {
        activeWrap.classList.remove("active");
      });
    }
  },
  optionSelect: function (item) {
    const selectedText = item.getAttribute("data-value");
    const wrap = item.closest(this.wrap);
    const selectedElement = wrap.querySelector(this.selected);
    if (
      selectedElement.tagName === "INPUT" ||
      selectedElement.tagName === "TEXTAREA"
    ) {
      selectedElement.value = selectedText;
    } else {
      selectedElement.textContent = selectedText;
    }
    this.inactive(wrap);
  },
};

// pause button
const pauseBtn = function (el, swiper) {
  if (!el.classList.contains("on")) {
    el.classList.add("on");
    swiper.autoplay.pause();
    el.querySelector(".txt").textContent = "재생";
    el.querySelector(".icon").classList.add("ri-play-line");
  } else {
    el.classList.remove("on");
    swiper.autoplay.start();
    el.querySelector(".txt").textContent = "일시정지";
    el.querySelector(".icon").classList.remove("ri-play-line");
  }
};
