import * as actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

const state = {
	homeImagesList : ["/static/images/banner_0.png","/static/images/banner_1.png"],
	homeSuperiorityList:[
		{text:"真实流量"},
		{text:"优质人群"},
		{text:"舒适场景营销"},
		{text:"可持续转化"},
		{text:"灵活投放"},
		{text:"效果保障"}
	]
}

export default {
	state,actions,getters,mutations
}
