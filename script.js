document.addEventListener('DOMContentLoaded', () => {
    const heartGrid = document.getElementById('heart-grid');
    const rows = 18; // Número de linhas para o coração
    const cols = 20; // Número de colunas para o coração
    const heartShape = [
        [0,0,0,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0]
    ];

    let heartCounter = 0;
    const totalHearts = heartShape.flat().filter(h => h === 1).length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (heartShape[i][j] === 1) {
                const heart = document.createElement('div');
                heart.classList.add('small-heart');
                
                // Define um atraso na animação para criar o efeito sequencial do vídeo
                const delay = heartCounter * 50; // 50ms de atraso por coração
                heart.style.animationDelay = `${delay}ms`;
                
                heartGrid.appendChild(heart);
                heartCounter++;
            }
        }
    }
});

document.querySelectorAll('.small-heart').forEach((heart, i) => {
  heart.style.setProperty('--i', i);
});
