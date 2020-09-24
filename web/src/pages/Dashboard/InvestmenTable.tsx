import React, { useMemo } from 'react';
import _ from 'lodash';

import Table from '~/components/Table';
import TableHeader from '~/components/Table/TableHeader';
import TableRow from '~/components/Table/TableRow';
import TableGroupRow from '~/components/Table/TableGroupRow';
import TableCol from '~/components/Table/TableCol';
import ProductLabel from '~/components/Labels/ProductLabel';
import Accordion from '~/components/Accordion';

import { INVESTMENT_TABLE_HEADER } from '~/constants';
import { generateInvestmentsTable } from '~/utils';
import { IGenerateInvestmentTable } from '~/utils/generateInvestmentsTable';
import { IDashboardProps } from './IDashboardProps';

const InvestmentTable: React.FC<IDashboardProps> = ({ isLoading }) => {
  const assets = generateInvestmentsTable();

  const nyseMtk = useMemo(() => {
    return _.filter(assets, (item) => item.market === 'nyse');
  }, [assets]);

  const nasdaqMkt = useMemo(() => {
    return _.filter(assets, (item) => item.market === 'nasdaq');
  }, [assets]);

  const renderTable = (asset: IGenerateInvestmentTable) => (
    <TableGroupRow key={asset.ticker}>
      <TableCol loading={isLoading} label="symbol">
        <ProductLabel
          label={asset.ticker}
          variants={asset.market}
          url={asset.companyUrl}
          loading={false}
        />
      </TableCol>

      <TableCol loading={isLoading} label="shares">
        {asset.shares}
      </TableCol>
      <TableCol loading={isLoading} label="symbol">
        {asset.avg_price}
      </TableCol>
      <TableCol loading={isLoading} label="Avg Price">
        {asset.price}
      </TableCol>
      <TableCol
        loading={isLoading}
        label="Return"
        color={Math.sign(asset.return_pct) > 0 ? 'positive' : 'negative'}
      >
        {asset.return_pct} %
      </TableCol>
      <TableCol loading={isLoading} label="Net cost">
        {asset.net_cost}
      </TableCol>
      <TableCol loading={isLoading} label="Market value">
        {asset.market_value}
      </TableCol>
      <TableCol
        loading={isLoading}
        label="Total Gain"
        color={Math.sign(asset.total_gain) > 0 ? 'positive' : 'negative'}
      >
        $ {asset.total_gain}
      </TableCol>
      <TableCol
        loading={isLoading}
        label="Daily Gain"
        color={Math.sign(asset.daily_gain) > 0 ? 'positive' : 'negative'}
      >
        {asset.daily_gain} %
      </TableCol>
      <TableCol
        loading={isLoading}
        label="Portfolio %"
        color={Math.sign(asset.portfolio_pct) > 0 ? 'positive' : 'negative'}
      >
        {asset.portfolio_pct} %
      </TableCol>
    </TableGroupRow>
  );
  return (
    <>
      <Accordion title="Nasdaq Market">
        <Table>
          <TableHeader columns={INVESTMENT_TABLE_HEADER} />
          <TableRow>{nasdaqMkt.map((asset) => renderTable(asset))}</TableRow>
        </Table>
      </Accordion>

      <Accordion title="Nyse Market">
        <Table>
          <TableHeader columns={INVESTMENT_TABLE_HEADER} />
          <TableRow>{nyseMtk.map((asset) => renderTable(asset))}</TableRow>
        </Table>
      </Accordion>
    </>
  );
};

export default InvestmentTable;
