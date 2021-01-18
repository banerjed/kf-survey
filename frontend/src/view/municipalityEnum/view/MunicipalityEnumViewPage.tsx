import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import { i18n } from 'src/i18n';
import actions from 'src/modules/municipalityEnum/view/municipalityEnumViewActions';
import selectors from 'src/modules/municipalityEnum/view/municipalityEnumViewSelectors';
import MunicipalityEnumView from 'src/view/municipalityEnum/view/MunicipalityEnumView';
import MunicipalityEnumViewToolbar from 'src/view/municipalityEnum/view/MunicipalityEnumViewToolbar';
import ContentWrapper from 'src/view/layout/styles/ContentWrapper';
import Breadcrumb from 'src/view/shared/Breadcrumb';
import PageTitle from 'src/view/shared/styles/PageTitle';

function MunicipalityEnumPage() {
  const dispatch = useDispatch();
  const match = useRouteMatch();

  const loading = useSelector(selectors.selectLoading);
  const record = useSelector(selectors.selectRecord);

  useEffect(() => {
    dispatch(actions.doFind(match.params.id));
  }, [dispatch, match.params.id]);

  return (
    <>
      <Breadcrumb
        items={[
          [i18n('dashboard.menu'), '/'],
          [i18n('entities.municipalityEnum.menu'), '/municipality-enum'],
          [i18n('entities.municipalityEnum.view.title')],
        ]}
      />

      <ContentWrapper>
        <PageTitle>
          {i18n('entities.municipalityEnum.view.title')}
        </PageTitle>

        <MunicipalityEnumViewToolbar match={match} />

        <MunicipalityEnumView loading={loading} record={record} />
      </ContentWrapper>
    </>
  );
}

export default MunicipalityEnumPage;
