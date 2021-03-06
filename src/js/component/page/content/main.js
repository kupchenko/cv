import React, {PureComponent} from 'react';
import {Divider} from 'antd';
import Experience from '@/js/component/page/content/experience';
import Summary from '@/js/component/page/content/summary';
import CV from '@/files/cv.pdf';
import {connect} from 'react-redux';
import CloudDownloadOutlined from '@ant-design/icons/lib/icons/CloudDownloadOutlined';
import {CV_PDF_FILE_NAME} from "@/js/util/constants";

class MainContent extends PureComponent {

    render() {
        const {name, title} = this.props;
        return (
            <>
                <div className='cv-name-header-row'>
                    <div className='employee-name'>{name}</div>
                    <a className='cv-download-link' href={CV} download={CV_PDF_FILE_NAME}>
                        <CloudDownloadOutlined className="cv-download-icon"/> Download CV
                    </a>
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
