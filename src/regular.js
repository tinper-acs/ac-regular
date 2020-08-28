import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'bee-button';
import Modal from 'bee-modal';
import Icon from 'bee-icon';
import FormControl from 'bee-form-control';
import Left from './components/Left'
import Right from './components/Right'
import {regularTree} from './regularTree.js'


const propTypes = {};
const defaultProps = {};
class Regular extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal:false,
            title:props.title || '正则表达式',
            tree:props.regularTree || regularTree,
            value:props.value || '',
            inputWidth:props.inputWidth || 240,
            inputValue:'',
            searchTree:[]
        };
    }
    componentWillReceiveProps(porps){
        if(porps.value!=this.state.value){
            this.setState({value:porps.value || ''})
        }
    }
    close=()=>{
        this.setState({showModal:false})
    }
    open=()=>{
        const {value}=this.state
        this.setState({showModal:true,inputValue:value})
    }
    submit=()=>{
        const {inputValue}=this.state
        this.setState({showModal:false,value:inputValue})
        this.props.onChange&&this.props.onChange(inputValue)

    }
    valueChange=(data)=>{
        const {inputValue}=this.state
        const memo = data.memo || ''
        this.setState({inputValue:inputValue+data.code,memo:'注释：'+memo})
    }
    inputChange=(inputValue)=>{
        this.setState({inputValue})
    }
    onSearch=(searchValue)=>{
        const {tree=[]}=this.state
        let newTree = []
        tree.forEach((v)=>{
            v.child.forEach((v2)=>{
                if(v2.name.indexOf(searchValue)>-1){
                    newTree.push(v2)
                }
            })
        }) 
        this.setState({newTree,searchValue})
    }
    memoChange=(memo)=>{
       
        this.setState({memo})
    }
    render(){
        const {showModal,title,tree,value,inputWidth,memo,inputValue,newTree,searchValue} = this.state
        return(
        <div className="ac-regular" style={{width:inputWidth}}>
            <div className='ac-regular-input' style={{width:inputWidth}}>
                <FormControl
                    className="demo1-input"
                    value={value}
                />
                <Icon type="uf-maxmize" onClick={this.open}/>
            </div>
           
            <Modal
                show={showModal}
                onHide={this.close}
                enforceFocus={false}
                className="ac-regular-modal"
            >
                <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Left tree={tree} valueChange={this.valueChange} onSearch={this.onSearch} newTree={newTree} searchValue={searchValue}></Left>
                    <Right memo={memo} value={inputValue} inputChange={this.inputChange} memoChange={this.memoChange}></Right>
                </Modal.Body>

                <Modal.Footer className="text-center">
                    <Button colors="secondary" style={{ marginRight: 8 }}  onClick={this.close}>取消</Button>
                    <Button  colors="primary" className='submitBtn' onClick={this.submit}>确认</Button>
                </Modal.Footer>
            </Modal>
        </div>)
    }
};
Regular.propTypes = propTypes;
Regular.defaultProps = defaultProps;
export default Regular;