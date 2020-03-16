import React, {PureComponent} from 'react';
import {Divider} from 'antd';
import Experience from '@/js/component/page/content/experience';
import Summary from '@/js/component/page/content/summary';
import {connect} from 'react-redux';
import CloudDownloadOutlined from "@ant-design/icons/lib/icons/CloudDownloadOutlined";

class MainContent extends PureComponent {

    cvFileName = 'CV_Dmitrii_Kupchenko_Senior_Java_Software_Engineer.pdf';

    render() {
        const {name, title} = this.props;
        return (
            <>
                <div className='cv-name-header-row'>
                    <div className='employee-name'>{name}</div>
                    <a className='cv-download-link'
                       href='../../../../files/cv.pdf'
                       download={this.cvFileName}><CloudDownloadOutlined/> Download
                        CV</a>

                </div>
                <div className='employee-title'>{title}</div>

                <Divider orientation='left'>Summary</Divider>
                <Summary/>

                <Divider orientation='left'>Experience</Divider>
                <Experience/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    name: state.cvData.data.name,
    title: state.cvData.data.title
});

export default connect(mapStateToProps)(MainContent);
