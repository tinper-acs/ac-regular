import React, { Component } from 'react';

import FormControl from 'bee-form-control';
import Button from 'bee-button';
import copy from 'copy-to-clipboard';
import Icon from 'bee-icon';
import Message from 'bee-message';

// import AceEditor from 'react-ace';
 
// import "ace-builds/src-noconflict/mode-java";
// import "ace-builds/src-noconflict/theme-github";

const propTypes = {};
const defaultProps = {};
class Regular extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    
    submit=()=>{
        const {value} = this.props
        let isReg
        try {
            isReg = this.evil("/"+value+'/') instanceof RegExp
        } catch (e) {
            isReg = false
        }
        if(isReg){
            Message.destroy();
            Message.create({content: '校验成功', color: 'successlight', icon: 'uf uf-arrow-c-o-down',className:'regularMessage'});
        }else{
            Message.destroy();
            Message.create({content: '校验失败', color: 'warninglight', icon: 'uf uf-close-c',className:'regularMessage'});
        }
    }
    evil=(fn)=> {
        var Fn = Function; //一个变量指向Function，防止有些前端编译工具报错
        return new Fn('return ' + fn)();
    }
    clearn=()=>{
        this.props.inputChange('')
    }
    copyFun=()=>{
        const {value} = this.props
        copy(value)
        this.props.memoChange('复制成功')
    }
    gonext=()=>{
        const {step,data} = this.props
        step<Object.keys(data).length&&this.props.inputChange(data[step+1],true,step+1)
       
    }
    goback=()=>{
        const {step,data} = this.props
        step>0&&this.props.inputChange(data[step-1],true,step-1)
    }
    render(){
        const {value,memo=''} = this.props
        return(
        <div className="ac-regular-right">
           <div className="ac-regular-right-memo">
               {memo?memo:<span >说明区</span>}
           </div>
           <FormControl
                className="ac-regular-right-input"
                value={value}
                placeholder='请输入'
                onChange={this.props.inputChange}
                componentClass="textarea"
            />
             {/* <AceEditor
                mode="java"
                theme="github"
                ref="editor"
                value={value}
                onChange={this.props.inputChange}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{ $blockScrolling: true }}
            /> */}
           
            <div className="regularright-btn">
                {/* <Button  bordered onClick={this.submit}>校验</Button> */}
                <Button  bordered onClick={this.clearn}>清空</Button>
                <Button  bordered onClick={this.copyFun}>复制</Button>
                <Button  bordered onClick={this.gonext}> <Icon type="uf-repeat" /></Button>
                <Button  bordered onClick={this.goback}> <Icon type="uf-back" /></Button>
            </div>
        </div>)
    }
};
Regular.propTypes = propTypes;
Regular.defaultProps = defaultProps;
export default Regular;