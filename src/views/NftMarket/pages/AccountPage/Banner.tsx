import React, { useCallback, useMemo, useState } from 'react'
import styled from 'styled-components'
import {useDropzone} from 'react-dropzone'
import { Flex, PencilIcon } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Loading from 'components/Loading'

const Wrapper = styled.div`
    position: relative;
    width: 100%;
`

const Dropzone = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    
    .edit {
        display: none;
    }

    &:hover > .edit {
        display: flex;
    }
`

const EditIcon = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    position: absolute;
    background: rgba(0,0,0,0.1);
    top:0;
    right:0;
    bottom: 0;
    left: 0;
`

const Placeholder = styled.div`
    width: 100%;
    height: 240px;
    background-color: rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content:center;
    align-items:center;
`

const Image = styled.img`
    display: flex;
    object-fit: cover;
    width: 100%;
    height: 240px;
`

const LoadingWrapper = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;
    position: absolute;
    top:0;
    right:0;
    bottom: 0;
    left: 0;
`

interface BannerProps {
  onSelect?: (file: File) => void
  image?: string
  enabled?: boolean
}

const Banner: React.FC<BannerProps> = ({onSelect, image, enabled}) => {

    const { t } = useTranslation()

    const [file, setFile] = useState(null)
    const {
        getRootProps, 
        getInputProps, 
        isDragActive
    } = useDropzone({
        accept: 'image/*',
        multiple: false,
        maxSize:1024*1024*100,
        onDrop: acceptedFiles => {
            const file_ = Object.assign(acceptedFiles[0], {
                preview:URL.createObjectURL(acceptedFiles[0])
            })
            setFile(file_)
            onSelect(file_)
        }
    })

    return (
        <>
        <Wrapper >
            { enabled ? (
            <Dropzone {...getRootProps()}>
                <input {...getInputProps} style={{display:"none"}}/>
                {!image && (
                    <Placeholder/>
                )}
                {!image && file && (
                    <LoadingWrapper>
                        <Loading/>
                    </LoadingWrapper>
                )}
                {image && (
                    <Image src={image}/> 
                )}

                <EditIcon className="edit">
                    <PencilIcon color="white"/>
                </EditIcon>
            </Dropzone>
            ) : (
                <Flex>
                    {image ? (
                        <Image src={image}/> 
                    ) : (
                        <Placeholder/>
                    )}
                </Flex>
            )}
        </Wrapper>
        </>
    )
}
Banner.defaultProps = {
    enabled: true
}
export default Banner 