document.addEventListener("DOMContentLoaded", function() {
    const n = 40;
    const array = [];
    let container = null;
    let audioCtx = null;
    let animationTimeout = null;
  
    function init() {
      container = document.getElementById("container");
      if (!container) {
        console.error("Container not found");
        return;
      }
      const uniqueNumbers = generateUniqueNumbers(1, 40);
      shuffleArray(uniqueNumbers);
      for (let i = 0; i < n; i++) {
        array[i] = uniqueNumbers[i] * 2;
      }
      showBars();
    }
  
    function generateUniqueNumbers(min, max) {
      const numbers = [];
      for (let i = min; i <= max; i++) {
        numbers.push(i);
      }
      return numbers;
    }
  
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  
    function play() {
      const swaps = bubbleSort([...array]);
      animate(swaps);
    }
  
    function stop() {
      clearTimeout(animationTimeout);
      showBars();
    }
  
    function animate(swaps) {
      if (swaps.length == 0) {
        showBars();
        return;
      }
      const [i, j] = swaps.shift(0);
      [array[i], array[j]] = [array[j], array[i]];
      showBars([i, j]);
      playNote(200 + array[i] * 500);
      playNote(200 + array[j] * 500);
  
      animationTimeout = setTimeout(function() {
        animate(swaps);
      }, 15);
    }
  
    function bubbleSort(array) {
      const swaps = [];
      do {
        var swapped = false;
        for (let i = 1; i < array.length; i++) {
          if (array[i - 1] > array[i]) {
            swaps.push([i - 1, i]);
            swapped = true;
            [array[i - 1], array[i]] = [array[i], array[i - 1]];
          }
        }
      } while (swapped);
      return swaps;
    }
  
    function showBars(indices) {
      if (!container) {
        console.error("Container not found");
        return;
      }
      container.innerHTML = "";
      const maxHeight = 100;
      const gap = 2;
      const containerWidth = container.offsetWidth;
      const barWidth = (containerWidth - (gap * (array.length - 1))) / array.length;
  
      for (let i = 0; i < array.length; i++) {
        const barHeight = (array[i] / 100) * maxHeight;
        const bar = document.createElement("div");
        bar.style.height = barHeight + "%";
        bar.style.width = barWidth + "px";
        bar.style.left = (i * (barWidth + gap)) + "px";
        bar.style.bottom = "0";
        bar.classList.add("bar");
        if (indices && indices.includes(i)) {
          bar.style.backgroundColor = "red";
        }
        container.appendChild(bar);
      }
    }
  
    function playNote(freq) {
      if (audioCtx == null) {
        audioCtx = new(
          AudioContext ||
          webkitAudioContext ||
          window.webkitAudioContext
        );
      }
      const dur = 0.1;
      const osc = audioCtx.createOscillator();
      osc.frequency.value = freq;
      osc.start();
      osc.stop(audioCtx.currentTime + dur);
      const node = audioCtx.createGain();
      node.gain.value = 0.1;
      node.gain.linearRampToValueAtTime(
        0, audioCtx.currentTime + dur
      );
      osc.connect(node);
      node.connect(audioCtx.destination);
    }
  
    window.init = init;
    window.play = play;
    window.stop = stop;
  
    init();
  });
  