import React from 'react';
import InputLabel from './Label';

// class InputField extends React.Component {
//     handleChange = (e) => {
//         this.props.onChange(e.target.value);
//     }

//     render() {
//         console.log(this.props);
//         return (
//             <div className="input-wrapper">
//                 {this.props.label && <InputLabel htmlFor={this.props.name} lable={this.props.label}></InputLabel>}
//                 <input
//                     type={this.props.type}
//                     name={this.props.name}
//                     value={this.props.value}
//                     placeholder={this.props.placeholder}
//                     autoComplete="off"
//                     onBlur={this.props.onBlur}
//                     onKeyDown={this.propsonKeyDown}
//                     onChange={this.handleChange}
//                 />
//                 {/* {icon && <Icon>{icon}</Icon>} */}
//                 {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
//             </div>
//         );
//     }
// }

// export default InputField;



const InputField = ({ label, type, name, value, placeholder, onChange }) => {
    const handleChange = (e) => onChange(e.target.value);

    return (
        <div className="input-wrapper">
            {label && <InputLabel htmlFor={name} lable={label}></InputLabel>}
            <input
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                autoComplete="off"
                // onBlur={this.props.onBlur}
                // onKeyDown={this.propsonKeyDown}
                onChange={handleChange}
            />
            {/* {icon && <Icon>{icon}</Icon>} */}
            {/* {error && <ErrorMessage>{error}</ErrorMessage>} */}
        </div>
    );
};

export default InputField;
