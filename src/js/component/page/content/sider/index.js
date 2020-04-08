import React, {PureComponent} from 'react';
import {Card, Layout} from 'antd';
import CardContent from '@/js/component/page/content/sider/card-content';
import {connect} from 'react-redux';

const {Sider} = Layout;

class PageSider extends PureComponent {

    render() {
        const avatarUrl = (this.props.isLoading) ? '/src/img/blank_avatar.png' : this.props.data.avatar;
        return (
            <Sider className='default-layout-background' width={300}>
                <Card
                    hoverable
                    style={{width: 300, padding: '0 0 15px 0'}}
                    cover={<img src={avatarUrl} alt='avatar'/>}
                    loading={this.props.isLoading}
                >
                    <CardContent/>
                </Card>
            </Sider>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoading: state.cvData.isLoading,
    data: state.cvData.data
});

export default connect(mapStateToProps)(PageSider);
