import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'bee-select';
import Icon from 'bee-icon';
import Pinyin from '../../ChinesePY'

const Option = Select.Option;
const propTypes = {};
const defaultProps = {};
class Left extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectValue:'0',
            activeIndex:-1,
            selectList:[],
            tree:props.tree
        };
    }
    componentDidMount(){
        const {tree} = this.state
        let selectList=[]
        const newtree =JSON.parse(JSON.stringify(tree)) 
        newtree.forEach((v)=>{
            
            v.id!='0'&&v.child.forEach((v2)=>{
                const newa = v2
                newa.name = v.name+'/'+newa.name
                selectList.push(newa)
            })
        }) 
        this.setState({selectList})
    }
    textChange=(selectValue)=>{
        this.setState({selectValue,activeIndex:-1})
    }
    valueChange=(v,k)=>{
        this.props.valueChange(v)
        this.setState({activeIndex:k})
    }
    
    onSearch = (value,{props:{item,key}}) => {
        console.log(`selected ${value}`);
        console.log(`selected item `,item);
        this.setState({selectValue:item.id.split('-')[0]})
        this.valueChange(item,parseInt(item.id.split('-')[1])-1)
      };
    selectPinYin=(input,option)=>{
        if(input.charCodeAt()>=32&&input.charCodeAt()<=126){
            const value = option.props.children.toLowerCase();
            return Pinyin.GetQP(value).indexOf( input.toLowerCase() ) >= 0;
        }else{
            return option.props.children.toLowerCase().indexOf( input.toLowerCase() ) >= 0
        }
    }
    chineseChangePY=(item,input)=>{
        const qp = Pinyin.GetQP(item)
        const rgx = new RegExp(input, 'gi')
        return rgx.test(qp)
    }
    render(){
        const {selectList,activeIndex,selectValue} = this.state
        const {tree} = this.props
        let treeAll=[] 
        tree.forEach((v)=>{ 
            treeAll =  treeAll.concat(v.child)
        })
        tree[0].id!='0'&&tree.unshift(
            {
                "name":"全部",
                "code":"0",
                "id":"0",
                "child":treeAll
            })
        const loops =(data) => data.map((v,k)=>{
            return (
              <Option value={v.id} key={v.id}>{v.name}</Option>
            )
        })
        const loopsli =(data) => data.map((v,k)=>{
            return (
              <li className ={activeIndex==k?'regular-left-li active':'regular-left-li'} value={v.code} key={v.id} onClick={this.valueChange.bind(this,v,k)}>{v.name}</li>
            )
        })
        return(
        <div className="regular-left">
            <div className="regularleft-title">
                <span>正则表达式</span>
            </div>
            <Select 
                className ='regularleft-select'
                placeholder={''}
                style={{ width: 208}}
                value={selectValue}
                onChange={this.textChange}>
                {loops(tree||[])}
             </Select>
            {/* <FormControl
                className="regularleft-search"
                value={searchValue}
                style={{ width: 208}}
                onSearch={this.onSearch}
                type="search"
            /> */}
             <Icon type="uf-search"/>
            <Select
                showSearch
               // combobox
                className="regularleft-search"
                style={{ width: 208 }}
                placeholder="搜索"
                optionFilterProp="children"
                filterOption={(input,Option)=>{return this.selectPinYin(input,Option)}}
                onChange={this.onSearch}
                dropdownClassName={'regularleft-search-drop'}
            >
                {
                selectList.map((da,i)=>{return (<Option key={i} title={da.name} value={da.code} item={da} >{da.name}</Option>)})
                }
            </Select>
           
             <ul  className ='regularleft-select-ul'>
                {
                    loopsli(tree[selectValue ].child)
                }
             </ul>
        </div>)
    }
};
Left.propTypes = propTypes;
Left.defaultProps = defaultProps;
export default Left;