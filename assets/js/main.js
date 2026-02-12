// Basic UX interactions for Xiao Li Yorozuya site

document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const nav = document.querySelector(".nav");
  
  if (mobileMenuToggle && nav) {
    mobileMenuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      mobileMenuToggle.classList.toggle("active");
    });

    // Close mobile menu when clicking a nav link
    const navLinks = nav.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("active");
        mobileMenuToggle.classList.remove("active");
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        nav.classList.remove("active");
        mobileMenuToggle.classList.remove("active");
      }
    });
  }

  const backToTop = document.querySelector(".back-to-top");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Contact form with document download feature
  const contactForm = document.querySelector("#contact-form");
  if (contactForm) {
    const statusEl = document.querySelector(".form-status");

    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(contactForm);
      const name = (formData.get("name") || "").toString().trim();
      const way = (formData.get("contact") || "").toString().trim();
      const message = (formData.get("message") || "").toString().trim();
      const preferredTime = (formData.get("preferred_time") || "").toString().trim();
      const channel = (formData.get("channel") || "").toString().trim();
      const topic = (formData.get("topic") || "").toString().trim();
      const extra = (formData.get("extra") || "").toString().trim();

      if (!name || !way || !message) {
        if (statusEl) {
          statusEl.textContent = "请填写姓名、联系方式和大致需求内容。";
          statusEl.classList.remove("ok");
          statusEl.classList.add("error");
        }
        return;
      }

      // Get current date and time
      const now = new Date();
      const dateStr = now.toLocaleDateString('zh-CN');
      const timeStr = now.toLocaleTimeString('zh-CN');

      // Build document content
      let docContent = `【小李万事屋】在线预约意向\n`;
      docContent += `=====================================\n\n`;
      docContent += `生成时间：${dateStr} ${timeStr}\n\n`;
      docContent += `【基本信息】\n`;
      docContent += `- 称呼：${name}\n`;
      docContent += `- 联系方式：${way}\n`;
      if (preferredTime) {
        docContent += `- 期望时间：${preferredTime}\n`;
      }
      if (channel) {
        const channelMap = {
          'wechat': '微信文字/语音',
          'video': '视频通话',
          'in-person': '线下面谈',
          'email': '邮件往来'
        };
        docContent += `- 偏好沟通方式：${channelMap[channel] || channel}\n`;
      }
      
      if (topic) {
        const topicMap = {
          'fortune': '运势占卜 / 手相解读',
          'language': '日语 / 英语学习与考试',
          'study': '学习规划 / 时间管理',
          'bike': '自行车维修与骑行相关',
          'errand': '跑腿 / 个人助理服务',
          'abroad': '海外代购 / 信息检索',
          'law': '基础法律常识咨询',
          'other': '其他 / 组合需求',
          'unsure': '暂不确定 / 需要一起梳理'
        };
        docContent += `- 咨询内容：${topicMap[topic] || topic}\n`;
      }
      
      docContent += `\n【需求描述】\n${message}\n`;
      
      if (extra) {
        docContent += `\n【其他备注】\n${extra}\n`;
      }
      
      docContent += `\n=====================================\n`;
      docContent += `请将以上内容发送至：lwtdzh999@gmail.com\n`;
      docContent += `或添加微信：changqi_sushi（备注"网站预约"）\n`;

      // Create and download file
      const blob = new Blob([docContent], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `小李万事屋预约_${name}_${dateStr.replace(/\//g, '-')}.txt`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      // Show success message
      if (statusEl) {
        statusEl.textContent = "信息已整理并下载成功！";
        statusEl.classList.remove("error");
        statusEl.classList.add("ok");
      }

      // Show alert with instructions
      setTimeout(() => {
        alert('预约信息已保存到下载的文档中。\n\n请将下载的文件内容发送到：\n📧 邮箱：lwtdzh999@gmail.com\n💬 微信：changqi_sushi\n\n感谢您的预约，我们会尽快回复！');
      }, 100);
    });
  }
});

