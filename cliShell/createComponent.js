const fs = require('fs');
const path = require('path');
const template = require('art-template');
const execa = require("execa");
const inquirer = require('inquirer');
const chalk = require('chalk');
const CPath = chalk.blue.underline.bold;
const CErr = str => chalk.bgRed.white.bold(" ERROR ") + chalk.red("   " + str)
const CSuc = chalk.green


class FileUtil {
    constructor(componentsDirPath, componentName, templateDirPath, Prefix, compileData, type) {
        this.compileData = compileData || {}
        let keys = Object.keys(compileData)
        /*        for (let key in compileData) {
                    keys.push(key)
                }*/
        this.Prefix = Prefix
        if(type === "组件"){
            console.log(CSuc(`组件前缀:  ${this.Prefix}`))
        }
        console.log(CSuc(`本次被检查的模板文件:  ${keys.join(",         ")}`))
        console.log(CSuc(`${type}  ${this.Prefix + componentName}  开始创建`))
        this.generate(componentsDirPath, componentName, templateDirPath)
    }

    //检测文件夹是否存在
    isDir(DirPath) {
        return fs.existsSync(DirPath);
    }

    //生成组件
    async generate(componentsDirPath, componentName, templateDirPath) {
        componentName = this.Prefix + componentName;
        try {
            if (this.isDir(path.join(componentsDirPath, componentName))) {
                console.log(CErr(`目标文件夹  ${CPath(path.join(componentsDirPath, componentName))}  已经存在，进程终止`))
            } else {
                //对模板文件夹下的所有文件读取并编译并写入目标文件夹
                for (let fp in this.compileData) {
                    const dirPath = path.join(componentsDirPath, componentName, fp, "../");
                    const data = this.compileData[fp]
                    const filePath = data.fileName ?
                        path.join(componentsDirPath, componentName, fp, "../", data.fileName) :
                        path.join(componentsDirPath, componentName, fp)
                    const templatePath = path.join(templateDirPath, fp);
                    if (!this.isDir(dirPath)) {
                        await this.createDir(dirPath)
                        console.log(CSuc('组件文件夹 ' + CPath(dirPath) + ' 生成!'));
                    }
                    console.log(CSuc(`模板文件  ${CPath(templatePath)}  开始编译，目标：${CPath(filePath)}`));
                    await this.compileFileAndReadPath(templatePath, data, filePath);
                    console.log(CSuc(`文件  ${CPath(filePath)}  生成!`));
                    await execa(`git add ${filePath}`);
                    console.log(CSuc(`git 跟踪文件  ${CPath(filePath)}  成功!`));

                }
                console.log(CSuc(`组件  ${componentName}  创建完成`))
            }
        } catch (e) {
            console.log(CErr("进程异常终止 错误信息:"), e);
            console.log(CErr("请手动删除已创建的文件"));
        }

    }

    createDir(DirPath) {
        return new Promise(((resolve, reject) => {
            fs.mkdir(DirPath, function (err, files) {
                if (err) {
                    console.log(CErr(`文件夹  ${CPath(DirPath)}  创建失败,进程终止`))
                    reject(err)
                } else {
                    resolve(files)
                }
            })
        }))
    }

    //编译指定文件并且写入到指定位置
    async compileFileAndReadPath(filePath, data, readFilePath) {
        let str = await this.readFile(filePath)
        str = template.render(str, data)
        console.log(CSuc(`模板文件  ${CPath(filePath)}  编译成功!`));
        await this.writeFile(readFilePath, str)
        return true
    }

    //读取文件
    readFile(filePath) {
        return new Promise((resolve, reject) => {
            fs.readFile(filePath, function (err, data) {
                if (err) {
                    console.log(CErr(`模板文件  ${CPath(filePath)}  读取失败,进程终止`));
                    reject(err)
                } else {
                    resolve(data.toString())
                }
            })
        })
    }

    //写入文件
    writeFile(path, data) {
        return new Promise((resolve, reject) => {
            fs.writeFile(path, data, 'utf8', function (err) {
                if (err) {
                    console.log(CErr(`组件文件 ${CPath(path)} 写入失败,进程终止`));
                    reject(err)
                } else {
                    resolve()
                }
            })
        })
    }
}


class NameUtil {
    //testName、TestName    ->  test(join)name
    static CapitalToLowercaseAndJoin(str, join) {
        return [...str].map((v, i) => {
            let charCode = v.charCodeAt()
            if (charCode >= 65 && charCode <= 90) {
                if (i === 0) {
                    return String.fromCharCode(charCode + 32)
                }
                return join + String.fromCharCode(charCode + 32)
            }
            return v
        })
            .join("")
    }

    //test(join)name    ->  TestName
    static LowercaseToCapital(str, join) {
        str = [...str]
        str.forEach((v, i) => {
            if (v === join) {
                let charCode = str[i + 1].charCodeAt()
                str[i + 1] = String.fromCharCode(charCode - 32)
            }
        })
        return str.filter(v => v !== "-")
            .join("")
    }

    //删除一个字符串头部所有的目标字符串
    static deleteStartsWith(str, start) {
        if (str.startsWith(start)) {
            return this.deleteStartsWith(str.slice(2), start)
        }
        return str
    }
}


class Input {
    getTemplateType() {
        return new Promise((resolve) => {
            inquirer.prompt({
                type: 'list',
                name: 'getTemplateType',
                message: '你要创建什么模板',
                choices: ['组件', '页面'],
            })
                .then(answers => {
                    resolve(answers.getTemplateType)
                })
        })
    }

    async getName(msg) {
        const {name} = await inquirer.prompt({
            type: 'input',
            name: 'name',
            message: msg,
        })
        return name.length ? name : await this.getName();
    }

    async cct() {
        let username = await execa("git config user.name")
        let email = await execa("git config user.email")
        username = username.stdout
        email = email.stdout
        console.log(CSuc(`用户:  ${CPath(username)}  邮箱:  ${CPath(email)}!`))
        let name = await this.getName('组件名')
        let {prefix, templateFiles, config} = await inquirer.prompt([
            {
                type: 'input',
                name: 'prefix',
                message: '前缀',
                default: function () {
                    return 'c-';
                }
            },
            {
                type: 'checkbox',
                message: '你要创建那些模板文件呢？',
                name: 'templateFiles',
                choices: [
                    new inquirer.Separator('选择你要创建的模板文件'),
                    {
                        name: 'index.vue',
                        checked: true,
                    },
                    {
                        name: 'README.md',
                        checked: true,
                    },
                ],
            },
            {
                type: 'checkbox',
                message: '配置项',
                name: 'config',
                choices: [
                    new inquirer.Separator('选择你要初始化的配置项'),
                    {
                        name: '使用userStyle作为style传递',
                        value: "userStyle"
                    },
                    {
                        name: '使用className作为class传递',
                        value: "className"
                    },
                ],
            }
        ])
        NameUtil.deleteStartsWith(name, prefix)//TestCom
        name = NameUtil.CapitalToLowercaseAndJoin(name, "-")//test-com
        let CasePrefix = prefix.replace(/[^a-zA-Z0-9]/g, "")
            .toUpperCase();//大写前缀，无符号
        let componentName1 = NameUtil.LowercaseToCapital(CasePrefix + name, "-")//大写全组件名
        let componentName = prefix + name//小写前缀拼接后的全组件名
        let Tconfig = {};
        config.forEach((item) => {
            Tconfig[item] = item;
        })
        const Files = {//所有模板文件配置项
            "index.vue": {
                msg: "{{msg}}",
                componentName: componentName,
                config: Tconfig
            },
            "README.md": {
                componentName: componentName,
                user: {name: username, email: email},
                componentName1,
                config: Tconfig
            },
        }
        for (const file in Files) {
            if (templateFiles.indexOf(file) === -1) {
                delete Files[file]
            }
        }
        await new FileUtil(path.join(__dirname, "../components"), name, path.join(__dirname, "./comTem"), prefix, Files, "组件")

    }

    async cpt() {
        let name = await this.getName('页面名')
        NameUtil.deleteStartsWith(name, "-")
        name = NameUtil.CapitalToLowercaseAndJoin(name, "-")
        const {templateFiles} = await inquirer.prompt([{
            type: 'checkbox',
            message: '你要创建那些模板文件呢？',
            name: 'templateFiles',
            choices: [
                new inquirer.Separator('选择你要创建的模板文件'),
                {
                    name: 'page.vue',
                    checked: true,
                }
            ],
        }])

        const Files = {
            'page.vue': {
                pageName: name,
                fileName: `${name}.vue`
            }
        }
        for (const file in Files) {
            if (templateFiles.indexOf(file) === -1) {
                delete Files[file]
            }
        }
        await new FileUtil(path.join(__dirname, "../pages"), name, path.join(__dirname, "./pageTem"), "", Files, "页面")
    }

    async ct() {
        const getTemplateType = await this.getTemplateType()
        switch (getTemplateType) {
            case "组件":
                await this.cct()
                break;
            case "页面":
                await this.cpt()
                break;
        }
    }
}

new Input().ct()
