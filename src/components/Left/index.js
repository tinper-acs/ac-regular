import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'bee-select';
import FormControl from 'bee-form-control';

const Option = Select.Option;
const propTypes = {};
const defaultProps = {};
class Left extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValue:'0',
            activeIndex:-1,
            
        };
    }
    
    textChange=(selectValue)=>{
        this.setState({selectValue,activeIndex:-1})
    }
    valueChange=(v,k)=>{
        this.props.valueChange(v)
        this.setState({activeIndex:k})
    }
    onSearch=(v)=>{
        this.props.onSearch(v)
    }
    render(){
        const {selectValue,activeIndex} = this.state
        const {tree,newTree,searchValue} = this.props
        const loops =(data) => data.map((v,k)=>{
            return (
              <Option value={v.id} key={v.id}>{v.name}</Option>
            )
        })
        const loopsli =(data) => data.map((v,k)=>{
            return (
              <li className ={activeIndex==k?'regular-left-li active':'regular-left-li'} value={escape(v.code)} key={v.id} onClick={this.valueChange.bind(this,v,k)}>{v.name}</li>
            )
        })
        return(
        <div className="regular-left">
            <div className="regularleft-title">
                <span>常用</span>
            </div>
           
            <FormControl
                className="regularleft-search"
                value={searchValue}
                style={{ width: 208}}
                onSearch={this.onSearch}
                type="search"
            />
            
            <Select 
                className ='regularleft-select'
                placeholder={''}
                style={{ width: 208}}
                value={selectValue}
                onChange={this.textChange}>
                {loops(tree||[])}
             </Select>
             <ul  >
                {
                    searchValue? loopsli(newTree):loopsli(tree[selectValue].child)
                }
             </ul>
        </div>)
    }
};
Left.propTypes = propTypes;
Left.defaultProps = defaultProps;
export default Left;