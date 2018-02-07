import React from 'react';
import ControlPanel from './ControlPanel.js';


// function removeCaptionProp(OldControlPanel) {
//     return class NewControlPanel extends React.Component  {
//
//         render() {
//             const {...otherProps} = this.props;
//
//             console.log(this.props);
//             console.log(otherProps);
//
//             otherProps[0] = "abcd";
//
//             return <OldControlPanel {...otherProps} />
//         }
//     }
// }


// function removeCaptionProp(OldControlPanel) {
//     return function newRender(props) {
//         const {...otherProps} = props;
//
//         console.log(props);
//         console.log(otherProps);
//
//         //otherProps[0] = "abcd";
//
//         return <OldControlPanel {...otherProps} />
//     }
// }

// function removeCaptionProp(OldControlPanel) {
//     return function newRender(props) {
//         const {...otherProps} = props;
//
//         otherProps.caption = "jianqiang";
//
//         console.log(props);
//         console.log(otherProps);
//
//         //otherProps[0] = "abcd";
//
//         return <OldControlPanel {...otherProps} />
//     }
// }

//继承
function removeCaptionProp(OldControlPanel) {
    return class NewControlPanel extends OldControlPanel  {

        render() {
            const {...otherProps} = this.props;

            otherProps.caption = "jianqiang";

            this.props = otherProps;

            console.log(this.props);
            console.log(otherProps);

            //otherProps[0] = "abcd";

            return super.render();
        }
    }
}

export default removeCaptionProp;

