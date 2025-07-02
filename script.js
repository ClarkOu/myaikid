document.addEventListener('DOMContentLoaded', function() {
    // 當頁面載入完成後執行
    
    // 用戶菜單功能
    const userAvatar = document.getElementById('userAvatar');
    const userDropdown = document.getElementById('userDropdown');
    
    if (userAvatar && userDropdown) {
        // 點擊頭像切換下拉菜單
        userAvatar.addEventListener('click', function(e) {
            e.stopPropagation();
            userDropdown.classList.toggle('show');
        });
        
        // 點擊其他地方關閉下拉菜單
        document.addEventListener('click', function(e) {
            if (!userAvatar.contains(e.target) && !userDropdown.contains(e.target)) {
                userDropdown.classList.remove('show');
            }
        });
        
        // 下拉菜單項目點擊事件
        const dropdownItems = userDropdown.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const text = this.textContent.trim();
                
                if (text === '登出') {
                    if (confirm('確定要登出嗎？')) {
                        alert('登出成功！');
                        // 這裡可以添加實際的登出邏輯
                        // window.location.href = 'login.html';
                    }
                } else {
                    alert(`${text}功能即將開放！`);
                }
                
                userDropdown.classList.remove('show');
            });
        });
    }
    
    // 添加點擊事件處理
    const aiItems = document.querySelectorAll('.ai-item');
    aiItems.forEach(item => {
        item.addEventListener('click', function() {
            const name = this.querySelector('.name') ? 
                this.querySelector('.name').textContent : '未知';
            
            console.log('點擊了:', name);
            
            // 根据名称跳转到不同页面
            if (name === '全球新聞 DEMO') {
                window.location.href = 'globalnews.html';
            } else if (name === 'ALVAZONE 小助理 DEMO') {
                window.location.href = 'alvazone.html';
            } else if (name === '1P') {
                window.location.href = '1p.html';
            } else if (name === '2M') {
                window.location.href = '2m.html';
            } else if (name === '3M') {
                window.location.href = '3m.html';
            } else if (name === '4M') {
                window.location.href = '4m.html';
            } else if (name === '5M') {
                window.location.href = '5m.html';
            } else if (name === '6M') {
                window.location.href = '6m.html';
            } else if (name === '4PC') {
                window.location.href = '4pc.html';
            } else if (name === '4PB') {
                window.location.href = '4pb.html';
            }
            // 其他AI角色可以根据需要添加跳转逻辑
        });
    });
    
    // 添加功能模組點擊事件處理
    const moduleItems = document.querySelectorAll('.module-item');
    moduleItems.forEach(item => {
        item.addEventListener('click', function() {
            const name = this.querySelector('.name') ? 
                this.querySelector('.name').textContent : '未知';
            
            console.log('點擊了模組:', name);
            
            if (name === '人才測評') {
                window.location.href = 'talent-assessment.html';
            } else if (name === '沙盤演練') {
                window.location.href = 'sandbox-training.html';
            } else if (name === '成長賦能') {
                window.location.href = 'growth-empowerment.html';
            } else {
                alert('該功能正在開發中，敬請期待！');
            }
        });
    });
    
    // 圖片加載優化
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    // 圖片加載完成後移除加載狀態
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
            this.parentElement.classList.add('loaded');
        });
        
        // 如果圖片已經緩存，立即觸發loaded狀態
        if (img.complete) {
            img.classList.add('loaded');
            img.parentElement.classList.add('loaded');
        }
    });
    
    // 預加載關鍵圖片 - 修正路徑並增加更多圖片
    const preloadImages = [
        'picture/1P.jpeg', 
        'picture/2M.jpeg', 
        'picture/3M.jpeg', 
        'picture/4M.jpeg'
    ];
    preloadImages.forEach(src => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = src;
        document.head.appendChild(link);
    });
    
    // 添加更智能的圖片預加載策略
    const addImagePreloading = () => {
        const images = document.querySelectorAll('img[loading="lazy"]');
        
        // 使用Intersection Observer API來優化圖片加載
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        // 預加載即將進入視窗的圖片
                        if (!img.src && img.dataset.src) {
                            img.src = img.dataset.src;
                        }
                        observer.unobserve(img);
                    }
                });
            }, {
                // 當圖片距離視窗還有100px時就開始加載
                rootMargin: '100px 0px'
            });
            
            images.forEach(img => {
                imageObserver.observe(img);
            });
        }
    };
    
    // 調用圖片預加載策略
    addImagePreloading();
    
    // 添加網路狀態檢測來優化圖片品質
    const optimizeForConnection = () => {
        if ('connection' in navigator) {
            const connection = navigator.connection;
            
            // 如果是慢速網路，可以考慮使用更小的圖片
            if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
                console.log('偵測到慢速網路，已優化圖片加載策略');
                // 可以在這裡添加更多優化邏輯
            }
        }
    };
    
    optimizeForConnection();

});

// 更新時間函數（Web版本不需要，但保留以備後用）
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    
    // 格式化時間
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    
    const timeString = hours + ':' + minutes;
    // Web版本沒有時間顯示元素，所以註解掉
    // document.querySelector('.time').textContent = timeString;
    console.log('目前時間:', timeString);
}
