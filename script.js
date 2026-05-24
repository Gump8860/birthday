// 音乐控制
const music = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicToggle');
let isPlaying = false;

// 尝试自动播放
function tryAutoPlay() {
    music.play().then(() => {
        isPlaying = true;
        musicBtn.classList.add('playing');
    }).catch(() => {
        // 自动播放被阻止，等待用户交互
        document.addEventListener('click', enableAudio, { once: true });
        document.addEventListener('touchstart', enableAudio, { once: true });
    });
}

function enableAudio() {
    if (!isPlaying) {
        music.play();
        isPlaying = true;
        musicBtn.classList.add('playing');
    }
}

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        music.pause();
        musicBtn.classList.remove('playing');
    } else {
        music.play();
        musicBtn.classList.add('playing');
    }
    isPlaying = !isPlaying;
});

// 页面加载后尝试播放
window.addEventListener('load', tryAutoPlay);

// 彩带效果
function createConfetti() {
    const container = document.getElementById('confetti-container');
    const colors = [
        '#f093fb', '#f5576c', '#4facfe', '#00f2fe', 
        '#43e97b', '#38f9d7', '#fa709a', '#fee140'
    ];
    
    for (let i = 0; i < 150; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = (Math.random() * 15 + 8) + 'px';
            
            container.appendChild(confetti);
            
            // 移除元素
            setTimeout(() => confetti.remove(), 5000);
        }, i * 30);
    }
}

// 持续彩带效果
function continuousConfetti() {
    setInterval(() => {
        const container = document.getElementById('confetti-container');
        for (let i = 0; i < 5; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = [
                '#f093fb', '#f5576c', '#4facfe', '#00f2fe', 
                '#43e97b', '#38f9d7', '#fa709a', '#fee140'
            ][Math.floor(Math.random() * 8)];
            confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.opacity = Math.random() * 0.7 + 0.3;
            container.appendChild(confetti);
            setTimeout(() => confetti.remove(), 6000);
        }
    }, 500);
}

// 启动彩带
createConfetti();
continuousConfetti();

// 鼠标移动粒子效果
document.addEventListener('mousemove', (e) => {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = e.clientX + 'px';
    particle.style.top = e.clientY + 'px';
    particle.style.width = '6px';
    particle.style.height = '6px';
    particle.style.background = 'rgba(255, 255, 255, 0.8)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '999';
    particle.style.boxShadow = '0 0 10px rgba(255, 255, 255, 0.8)';
    document.body.appendChild(particle);
    
    setTimeout(() => particle.remove(), 1000);
});

// 触摸设备支持
document.addEventListener('touchmove', (e) => {
    const touch = e.touches[0];
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = touch.clientX + 'px';
    particle.style.top = touch.clientY + 'px';
    particle.style.width = '8px';
    particle.style.height = '8px';
    particle.style.background = 'rgba(255, 255, 255, 0.6)';
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '999';
    document.body.appendChild(particle);
    
    setTimeout(() => particle.remove(), 800);
});
