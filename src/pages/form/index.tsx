import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { useLeavePageConfirmation } from '@/hooks/useLeavePageConfirmation';

export default function FormRoute() {
  const [changesOnPage, setChangesOnPage] = useState(false);

  useLeavePageConfirmation(changesOnPage);

  return (
    <div className="py-16">
      <Switch.Group>
        <div className="flex items-center">
          <Switch.Label className="mr-4">
            {changesOnPage
              ? 'Changes on page (Try to navigate away, refresh, close, or click the back button)'
              : 'No changes on page (You can navigate freely)'}
          </Switch.Label>
          <Switch
            checked={changesOnPage}
            onChange={setChangesOnPage}
            className={`${
              changesOnPage ? 'bg-blue-600' : 'bg-gray-200'
            } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
          >
            <span
              className={`${
                changesOnPage ? 'translate-x-6' : 'translate-x-1'
              } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
            />
          </Switch>
        </div>
      </Switch.Group>
    </div>
  );
}
