
import React from 'react';
import { Input } from '@/components/ui/input';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import DatePicker from './DatePicker';

interface RecordFormProps {
  label: string;
  setLabel: (label: string) => void;
  type: 'exchange' | 'breakage';
  setType: (type: 'exchange' | 'breakage') => void;
  date: Date;
  setDate: (date: Date) => void;
  notes: string;
  setNotes: (notes: string) => void;
}

const RecordForm: React.FC<RecordFormProps> = ({ 
  label, 
  setLabel, 
  type, 
  setType,
  date,
  setDate,
  notes,
  setNotes
}) => {
  return (
    <form className="space-y-5">
      {/* Legenda e Data */}
      <div className="grid gap-4 grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="label" className="text-sm font-medium">
            Legenda
          </label>
          <Input
            id="label"
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            placeholder="Registro #1"
          />
        </div>
        <DatePicker
          date={date}
          setDate={setDate}
          allowFutureDates={false}
          label="Data"
        />
      </div>
      
      {/* Tipo */}
      <div className="space-y-2">
        <label htmlFor="type" className="text-sm font-medium">
          Tipo
        </label>
        <Select
          value={type}
          onValueChange={(value) => setType(value as 'exchange' | 'breakage')}
        >
          <SelectTrigger>
            <SelectValue placeholder="Selecione o tipo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="breakage">Quebra</SelectItem>
            <SelectItem value="exchange">Troca</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Observações Gerais */}
      <div className="space-y-2">
        <label htmlFor="notes" className="text-sm font-medium">
          Observações Gerais
        </label>
        <Textarea
          id="notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Observações gerais sobre este grupo de itens"
          rows={3}
        />
      </div>
    </form>
  );
};

export default RecordForm;
