import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Wallet, 
  PiggyBank, 
  TrendingUp, 
  RefreshCcw 
} from 'lucide-react';

const SavingsAllocator = () => {
  const [payrollBalance, setPayrollBalance] = useState(5000);
  const [savingsAmount, setSavingsAmount] = useState(1000);
  const [allocations, setAllocations] = useState({
    'Rainy Day': 0.3,
    'Invest': 0.4,
    'Future Fund': 0.3
  });
  const [accountBalances, setAccountBalances] = useState({
    'Rainy Day': 0,
    'Invest': 0,
    'Future Fund': 0
  });

  const distributeSavings = () => {
    if (savingsAmount > payrollBalance) {
      alert('Insufficient funds!');
      return;
    }

    const newPayrollBalance = payrollBalance - savingsAmount;
    setPayrollBalance(newPayrollBalance);

    const newAccountBalances = { ...accountBalances };
    Object.keys(allocations).forEach(account => {
      const depositAmount = savingsAmount * allocations[account];
      newAccountBalances[account] += depositAmount;
    });

    setAccountBalances(newAccountBalances);
  };

  const updateAllocation = (account, percentage) => {
    const newAllocations = { ...allocations };
    newAllocations[account] = parseFloat(percentage);
    
    const totalAllocation = Object.values(newAllocations).reduce((a, b) => a + b, 0);
    if (totalAllocation !== 1) {
      alert('Total allocation must equal 100%');
      return;
    }

    setAllocations(newAllocations);
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Wallet className="mr-2" /> Savings Allocation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="flex items-center space-x-4">
              <span>Payroll Balance:</span>
              <Input 
                type="number" 
                value={payrollBalance} 
                onChange={(e) => setPayrollBalance(Number(e.target.value))}
                className="w-32"
              />
            </div>

            <div className="flex items-center space-x-4">
              <span>Monthly Savings:</span>
              <Input 
                type="number" 
                value={savingsAmount} 
                onChange={(e) => setSavingsAmount(Number(e.target.value))}
                className="w-32"
              />
              <Button onClick={distributeSavings}>
                <RefreshCcw className="mr-2" /> Distribute
              </Button>
            </div>

            <div className="grid gap-4">
              {Object.keys(allocations).map((account) => (
                <div key={account} className="flex items-center space-x-4">
                  <div className="flex items-center">
                    {account === 'Rainy Day' && <PiggyBank className="mr-2" />}
                    {account === 'Invest' && <TrendingUp className="mr-2" />}
                    {account === 'Future Fund' && <Wallet className="mr-2" />}
                    {account}
                  </div>
                  <Input 
                    type="number" 
                    step="0.1" 
                    min="0" 
                    max="1" 
                    value={allocations[account]} 
                    onChange={(e) => updateAllocation(account, e.target.value)}
                    className="w-24"
                  />
                  <span>Balance: ${accountBalances[account].toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SavingsAllocator;