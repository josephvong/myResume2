import SimpleMDE from 'simplemde'
const toolbar = [
        {
          name: "bold",
          action: SimpleMDE.toggleBold,
          className: "fa fa-bold",
          title: "粗体",
        },
        {
          name: "italic",
          action: SimpleMDE.toggleItalic,
          className: "fa fa-italic",
          title: "斜体",
        },
        {
          name: "strikethrough",
          action: SimpleMDE.toggleStrikethrough,
          className: "fa fa-strikethrough",
          title: "中横线",
        },
        {
          name: "heading",
          action: SimpleMDE.toggleHeadingSmaller,
          className: "fa fa-lg fa-header",
          title: "标题",
        },
        "|",
        {
          name: "unordered-list",
          action: SimpleMDE.toggleUnorderedList,
          className: "fa fa-list-ul",
          title: "无序列表",
        },
        {
          name: "ordered-list",
          action: SimpleMDE.toggleOrderedList,
          className: "fa fa-list-ol",
          title: "列表",
        },
        {
          name: "code",
          action: SimpleMDE.toggleCodeBlock,
          className: "fa fa fa-code",
          title: "代码",
        },
        {
          name: "quote",
          action: SimpleMDE.toggleBlockquote,
          className: "fa fa-quote-left",
          title: "标签",
        },
        "|",
        {
          name: "link",
          action: SimpleMDE.drawLink,
          className: "fa fa-link",
          title: "链接",
        },
        {
          name: "image",
          action: SimpleMDE.drawImage,
          className: "fa fa-picture-o",
          title: "图片",
        },
        {
          name: "horizontal-rule",
          action: SimpleMDE.drawHorizontalRule,
          className: "fa fa-minus",
          title: "分割线",
        },
        "|",
        {
          name: "clean-block",
          action: SimpleMDE.cleanBlock,
          className: "fa fa-eraser fa-clean-block",
          title: "清除样式",
        }, 
        {
          name: "preview",
          action: SimpleMDE.togglePreview,
          className: "fa fa-eye no-disable",
          title: "预览",
        }, 
        {
          name: "guide",
          action: function(){
            window.open('https://simplemde.com/markdown-guide')
          },
          className: "fa fa-question-circle",
          title: "markdown规则",
        },
      ] 

export default toolbar