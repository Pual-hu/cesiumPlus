module.exports = {
    //继承外部配置或者包配置
    extends: ['@commitlint/config-conventional'], 
    rules: {
        // body开头空行 
        'body-leading-blank': [1, 'always'],
        // body最大内容长度
        'body-max-line-length': [2, 'always', 100],
        // footer开头空行
        'footer-leading-blank': [1, 'always'],
        // footer最大内容长度
        'footer-max-line-length': [2, 'always', 100],
        // header 最大长度
        'header-max-length': [2, 'always', 100],
        // subject 单词格式
        'subject-case': [
            2,
            'never',
            ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
        ],
        // subject 是否为空
        'subject-empty': [2, 'never'],
        // subject 中止符
        'subject-full-stop': [2, 'never', '.'],
        // type 单词格式
        'type-case': [2, 'always', 'lower-case'],
        // type是否为空
        'type-empty': [2, 'never'],
        // type 可选值 例如: [ 'feat', 'fix' ]
        'type-enum': [
            2,
            'always',
            [
                // 打包
                'build',
                // 改变构建流程、或者增加依赖库、工具等
                'chore',
                // 持续集成
                'ci',
                // 仅仅修改了文档
                'docs',
                // 添加新功能
                'feat',
                // 修复bug
                'fix',
                // 性能优化(performance)
                'perf',
                // 代码重构，没有添加新功能或者修复bug
                'refactor',
                // 	回滚到上一个版本
                'revert',
                // 仅仅修改了空格、格式缩进、逗号等等，不改变代码逻辑
                'style',
                // 增加测试用例
                'test',
            ],
        ],
    },
};