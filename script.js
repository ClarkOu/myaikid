document.addEventListener('DOMContentLoaded', function() {
    // 当页面加载完成后执行
    
    // 更新状态栏时间
    updateTime();
    
    // 添加点击事件处理
    const aiItems = document.querySelectorAll('.ai-item');
    aiItems.forEach(item => {
        item.addEventListener('click', function() {
            const name = this.querySelector('.name') ? 
                this.querySelector('.name').textContent : '未知';
            
            console.log('点击了:', name);
            
            // 根据名称跳转到不同页面
            if (name === '全球新聞 DEMO') {
                window.location.href = 'https://clarkou.github.io/crazynews/';
            } else if (name === 'ALVAZONE 小助理 DEMO') {
                window.location.href = 'alvazone.html';
            }
            // 其他AI角色可以根据需要添加跳转逻辑
        });
    });
});

// 更新时间函数
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    
    // 格式化时间
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    const timeString = hours + ':' + minutes;
    document.querySelector('.time').textContent = timeString;
}
