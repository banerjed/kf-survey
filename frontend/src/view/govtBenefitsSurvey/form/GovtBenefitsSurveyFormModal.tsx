import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { i18n } from 'src/i18n';
import GovtBenefitsSurveyForm from 'src/view/govtBenefitsSurvey/form/GovtBenefitsSurveyForm';
import GovtBenefitsSurveyService from 'src/modules/govtBenefitsSurvey/govtBenefitsSurveyService';
import Errors from 'src/modules/shared/error/errors';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

function GovtBenefitsSurveyFormModal(props) {
  const [saveLoading, setSaveLoading] = useState(false);

  const doSubmit = async (_, data) => {
    try {
      setSaveLoading(true);
      const { id } = await GovtBenefitsSurveyService.create(data);
      const record = await GovtBenefitsSurveyService.find(id);
      props.onSuccess(record);
    } catch (error) {
      Errors.handle(error);
    } finally {
      setSaveLoading(false);
    }
  };

  const doClose = () => {
    return props.onClose();
  };

  return ReactDOM.createPortal(
    <Dialog
      open={true}
      onClose={doClose}
      maxWidth="md"
      fullWidth={true}
    >
      <DialogTitle
        disableTypography
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <h2 style={{ margin: 0 }}>
          {i18n('entities.govtBenefitsSurvey.new.title')}
        </h2>
        <IconButton onClick={doClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <GovtBenefitsSurveyForm
          saveLoading={saveLoading}
          onSubmit={doSubmit}
          onCancel={doClose}
          modal
        />
      </DialogContent>
    </Dialog>,
    (document as any).getElementById('modal-root'),
  );
}

export default GovtBenefitsSurveyFormModal;
