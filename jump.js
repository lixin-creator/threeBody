
// 获取所有带有跳转链接的<a>元素
const links = document.querySelectorAll('a[href]');

// 遍历所有链接添加点击事件监听
links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // 阻止默认跳转行为

        // 显示加载动画
        const loading = document.querySelector('.loading');
        loading.style.display = 'flex'; // 显示加载动画

        // 模拟延迟跳转
        setTimeout(() => {
            window.location.href = this.href; // 实际跳转到链接地址
        }, 1000); // 延迟2秒钟，可以根据实际情况调整
    });
});