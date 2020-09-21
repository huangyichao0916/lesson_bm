// @babel/core babel-types 
const plugin = function ({ types: t }) {
    return {
        visitor: {
            ObjectProperty(path) {
                // 当前节点
                const node = path.node;
                if (node.key.name !== 'component') {
                    return;
                }
                let source = node.value;
                // 当前模块里面唯一变量名
                const program = path.findParent((p) => p.isProgram());

                let local = program.scope.generateUidIdentifier();
                let specifiers = [t.importDefaultSpecifier(local)]
                // import local { useState } from 'XX'
                let importStatement = t.importDeclaration(specifiers, source)
                // 插入 import
                program.node.body.unshift(importStatement);
                // 替换 component 这个 key的值
                // componet: '/./'
                node.value = local
            }
        }
    }
}
module.exports = plugin