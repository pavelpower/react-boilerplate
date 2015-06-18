import React from 'react';

class Dialog extends React.Component {

    static defaultProps = {
        saveText: 'Сохранить',
        closeText: 'Отменить'
    }

    render() {
        return (
            <div className='Dialog'>
                <div className='modal'
                     ref={this._onMount}
                     tabIndex='-1'
                     role='dialog'>
                    <div className='modal-dialog'>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <button className='close'
                                        type='button'
                                        data-dismiss='modal'>
                                    <span>&times;</span>
                                </button>
                                <h4 className='modal-title'>{this.props.title}</h4>
                            </div>
                            <div className='modal-body'>
                                {this.props.content}
                            </div>
                            <div className='modal-footer'>
                                <button className='btn btn-default'
                                        type='button'
                                        data-dismiss='modal'>{this.props.closeText}</button>
                                <button className='btn btn-primary'
                                    type='button'
                                    onClick={this._onSaveClick}>{this.props.saveText}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    _onMount = (component) => {
        this._modal = $(React.findDOMNode(component));
        this._modal.modal('show');
        this._modal.on('hide.bs.modal', () => {
            this.props.onClose()
        });
    }

    _onSaveClick = (event) => {
        if (this.props.onSave) {
            this.props.onSave();
        }
        if (this.props.onClose) {
            this.props.onClose();
        }
        this._modal.modal('hide');
    }

}

export default Dialog;
