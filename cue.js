// 获取div盒子元素
const box = document.querySelector('.box')

// 创建提示框元素
const tooltip = document.createElement('div');
tooltip.style.position = 'absolute';
tooltip.style.backgroundColor = 'white';
tooltip.style.border = '1px solid black';
tooltip.style.padding = '5px';
tooltip.style.fontFamily =  'SimSun';
tooltip.style.display = 'none';
document.body.appendChild(tooltip);

// 监听鼠标进入事件
box.addEventListener('mouseenter', (event) => {
    // 设置提示框内容
    tooltip.innerHTML = '点击跳转百度';

    // 计算提示框位置
    const x = event.clientX + 10; // 鼠标右侧10像素处
    const y = event.clientY + 10; // 鼠标下方10像素处

    // 设置提示框位置和显示状态
    tooltip.style.left = `${x}px`;
    tooltip.style.top = `${y}px`;
    tooltip.style.display = 'block';
});

// 监听鼠标离开事件
box.addEventListener('mouseleave', () => {
    // 隐藏提示框
    tooltip.style.display = 'none';
});
