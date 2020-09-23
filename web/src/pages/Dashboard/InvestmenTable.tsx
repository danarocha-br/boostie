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

const InvestmentTable: React.FC = () => {
  const assets = generateInvestmentsTable();

  const nyseMtk = useMemo(() => {
    return _.filter(assets, (item) => item.market === 'nyse');
  }, [assets]);

  const nasdaqMkt = useMemo(() => {
    return _.filter(assets, (item) => item.market === 'nasdaq');
  }, [assets]);

  // const checkNumbers = useMemo(() => {
  //   let getObjectsValues = Object.fromEntries(
  //     Object.entries(assets).map(([key, value]) => [
  //       key,
  //       {
  //         dailyGain: value.daily_gain,
  //         totalGain: value.total_gain,
  //         return: value.return_pct,
  //       },
  //     ]),
  //   );

  //   const array = Object.values(getObjectsValues);

  //   console.log(Object.values(getObjectsValues));
  // }, [assets]);
  return (
    <>
      <Accordion title="Nasdaq Market">
        <Table>
          <TableHeader columns={INVESTMENT_TABLE_HEADER} />
          <TableRow>
            {nasdaqMkt.map((asset) => (
              <TableGroupRow key={asset.ticker}>
                <TableCol label="symbol">
                  <ProductLabel
                    label={asset.ticker}
                    variants={asset.market}
                    url={asset.companyUrl}
                    loading={false}
                  />
                </TableCol>

                <TableCol label="shares">{asset.shares}</TableCol>
                <TableCol label="symbol">{asset.avg_price}</TableCol>
                <TableCol label="Avg Price">{asset.price}</TableCol>
                <TableCol label="Return" color="positive">
                  {asset.return_pct}
                </TableCol>
                <TableCol label="Net cost">{asset.net_cost}</TableCol>
                <TableCol label="Market value">{asset.market_value}</TableCol>
                <TableCol label="Total Gain">{asset.total_gain}</TableCol>
                <TableCol label="Daily Gain">{asset.daily_gain}</TableCol>
                <TableCol label="Portfolio %">{asset.portfolio_pct}</TableCol>
              </TableGroupRow>
            ))}
          </TableRow>
        </Table>
      </Accordion>

      <Accordion title="Nyse Market">
        <Table>
          <TableHeader columns={INVESTMENT_TABLE_HEADER} />
          <TableRow>
            {nyseMtk.map((asset) => (
              <TableGroupRow key={asset.ticker}>
                <TableCol label="symbol">
                  <ProductLabel
                    label={asset.ticker}
                    variants={asset.market}
                    url={asset.companyUrl}
                    loading={false}
                  />
                </TableCol>

                <TableCol label="shares">{asset.shares}</TableCol>
                <TableCol label="symbol">{asset.avg_price}</TableCol>
                <TableCol label="Avg Price">{asset.price}</TableCol>
                <TableCol label="Return" color="positive">
                  {asset.return_pct}
                </TableCol>
                <TableCol label="Net cost">{asset.net_cost}</TableCol>
                <TableCol label="Market value">{asset.market_value}</TableCol>
                <TableCol label="Total Gain">{asset.total_gain}</TableCol>
                <TableCol label="Daily Gain">{asset.daily_gain}</TableCol>
                <TableCol label="Portfolio %">{asset.portfolio_pct}</TableCol>
              </TableGroupRow>
            ))}
          </TableRow>
        </Table>
      </Accordion>
    </>
  );
};

export default InvestmentTable;
