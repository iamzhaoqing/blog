(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{354:function(s,a,t){"use strict";t.r(a);var e=t(21),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"配置两个git账户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置两个git账户"}},[s._v("#")]),s._v(" 配置两个git账户")]),s._v(" "),t("p",[s._v("公司的代码在 gitlab 上，还有自己项目托管在 github，需要存在两个 git 账户。")]),s._v(" "),t("h3",{attrs:{id:"修改配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改配置"}},[s._v("#")]),s._v(" 修改配置")]),s._v(" "),t("p",[s._v("多个账户需要在每个项目中分别配置用户名和邮箱，如果有配置过全局用户名和邮箱，可以删除。")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --unset user.name\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" config --global --unset user.email\n")])])]),t("h3",{attrs:{id:"生成密钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#生成密钥"}},[s._v("#")]),s._v(" 生成密钥")]),s._v(" "),t("p",[s._v("需要给每个账户生成一对密钥；")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ ssh-keygen -t rsa -b "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v(" -C "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("email"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),t("p",[s._v("然后提示 "),t("code",[s._v("Enter a file in which to save the key (/Users/zq/.ssh/id_rsa): [Press enter]")]),s._v(", 两次生成需要不同的密钥文件。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("Enter a "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" to save the key "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/Users/zq/.ssh/id_rsa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": id_rsa_github\n")])])]),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("Enter a "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" to save the key "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("/Users/zq/.ssh/id_rsa"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(": id_rsa_gitlab\n")])])]),t("p",[s._v("分别生成了两组文件，名称分别是 "),t("code",[s._v("id_rsa_github、id_rsa_gitlab")]),s._v("。")]),s._v(" "),t("p",[s._v("当提示输入密码信息时，直接回车跳过，否则每次拉代码都需要输入密码。")]),s._v(" "),t("h3",{attrs:{id:"添加私钥到本地"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加私钥到本地"}},[s._v("#")]),s._v(" 添加私钥到本地")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ ssh-add ~/.ssh/id_rsa_github\n$ ssh-add ~/.ssh/id_rsa_gitlab\n")])])]),t("p",[s._v("添加后可以使用 "),t("code",[s._v("ssh-add -l")]),s._v(" 命令进行查看。")]),s._v(" "),t("h3",{attrs:{id:"配置本地密钥"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置本地密钥"}},[s._v("#")]),s._v(" 配置本地密钥")]),s._v(" "),t("p",[s._v("进入 "),t("code",[s._v(".ssh")]),s._v(" 文件加，修改 "),t("code",[s._v("config")]),s._v(" 文件，如果没有此文件需要新建。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.ssh\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" config\n")])])]),t("p",[s._v("文件内容：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Host github  # 别名，自定义\nHostName gitlab.com  # 托管网站的域名\nUser user2  # 用户名\nIdentityFile ~/.ssh/id_rsa_github  # 使用的密钥文件\n\nHost gitlab\nHostName gitlab.com\nUser suer1\nIdentityFile ~/.ssh/id_rsa_gitlab\n")])])]),t("h3",{attrs:{id:"添加-ssh-keys"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#添加-ssh-keys"}},[s._v("#")]),s._v(" 添加 ssh keys")]),s._v(" "),t("p",[s._v("分别在 gitlab 和 github 上添加 ssh keys，都有详细的添加步骤介绍。比如在 github 添加 ssh keys 页面点击 "),t("code",[s._v("generating SSH keys")]),s._v("。")]),s._v(" "),t("p",[s._v("显示公钥再粘贴到 github/gitlab.")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.ssh/id_rsa_github\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.ssh/id_rsa_gitlab\n")])])]),t("h3",{attrs:{id:"测试配置是否成功"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#测试配置是否成功"}},[s._v("#")]),s._v(" 测试配置是否成功")]),s._v(" "),t("p",[s._v("直接使用别名就可以。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T github\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ssh")]),s._v(" -T gitlab\n")])])]),t("h3",{attrs:{id:"克隆代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#克隆代码"}},[s._v("#")]),s._v(" 克隆代码")]),s._v(" "),t("p",[s._v("需要将地址更改为别名")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@github.com:zq/test.git\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@github:zq/test.git  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用别名")]),s._v("\n")])])]),t("h3",{attrs:{id:"配置已有仓库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置已有仓库"}},[s._v("#")]),s._v(" 配置已有仓库")]),s._v(" "),t("p",[s._v("如果已经拉取本地仓库，除了修改 "),t("code",[s._v("用户名和邮箱")]),s._v("，还需要配置文件。")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" .git\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" config\n")])])]),t("p",[s._v('修改 config 文件中已有 remote "origin" 信息。')]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('[remote "origin"]\n    url = git@github.com:zq/test.git\n    fetch = +refs/heads/*:refs/remotes/origin/*\n')])])]),t("p",[s._v("将 "),t("code",[s._v("github.com")]),s._v(" 修改为 "),t("code",[s._v("github")]),s._v(" 别名。")])])}),[],!1,null,null,null);a.default=r.exports}}]);