import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import TalksPostPreview from './preview-templates/TalksPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import SpeakerPreview from './preview-templates/SpeakerPreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('talks', TalksPostPreview)
CMS.registerPreviewTemplate('speakers', SpeakerPreview)
