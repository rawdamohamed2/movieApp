// export default {
//   content: ["./src/**/*.{js,jsx,ts,tsx,html}"], 
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  theme: {
    extend: {
      colors: {
        input: '#111111',       // خلفية الحقول - أسود فاحم
        border: '#CCCCCC',      // حدود الحقول - رمادي فاتح
        font: '#FFFFFF',        // النصوص - أبيض ناصع
        focus: '#1CC1F599',     // أزرق فيروزي شفاف عند التركيز
        body: '#0D0D0D',        // خلفية الصفحة الكاملة - رمادي داكن جداً
        background: '#0D0D0D',  // الخلفية العامة
        secondbg: '#000000',    // خلفية ثانوية - أسود كامل
        button: '#18aedcff',      // أزرار - أزرق فيروزي زاهي
        active: '#00e1ffff',      // العنصر النشط - أصفر ساطع
        hover: '#aadedeff',        // لون عند مرور الماوس - رمادي غامق
        navbar: '#000000',
        secfont:'#bfbfbfff',
        secfont2:'#393838ff',
        secfont3:'#dadadaff',
      },
    },
  },
  plugins: [],
}