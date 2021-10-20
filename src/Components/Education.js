import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layouts';
import Title from './Title';
import SmallTitle from './SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import EducationItem from './EducationItem';

function Education() {
    const briefcase = <BusinessCenterIcon />
    return (
        <EducationStyled>
            <Title title={'Education '} span={'Education '} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Education'} />
                </div>
               
                <div className="Education-content ">
                    <EducationItem 
                        year={'2021 - 2021'} 
                        title={'Masai School'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <EducationItem 
                        year={'2016 - 2020'} 
                        title={'Govind Balabh Pant University of Agriculture And Technology'}
                        subTitle={'Btech Electronics and Communication Engineering'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                  
                </div>
            </InnerLayout>
        </EducationStyled>    
    )
}

const EducationStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .Education-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Education
