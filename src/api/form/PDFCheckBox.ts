import PDFDocument from 'src/api/PDFDocument';
import { PDFAcroCheckBox } from 'src/core/acroform';
import { assertIs } from 'src/utils';

import PDFField from 'src/api/form/PDFField';

/**
 * Represents a check box field of a [[PDFForm]].
 */
export default class PDFCheckBox extends PDFField {
  static of = (acroCheckBox: PDFAcroCheckBox, doc: PDFDocument) =>
    new PDFCheckBox(acroCheckBox, doc);

  /** The low-level PDFAcroCheckBox wrapped by this check box. */
  readonly acroField: PDFAcroCheckBox;

  /** The document to which this check box belongs. */
  readonly doc: PDFDocument;

  private constructor(acroCheckBox: PDFAcroCheckBox, doc: PDFDocument) {
    super(acroCheckBox, doc);

    assertIs(acroCheckBox, 'acroCheckBox', [
      [PDFAcroCheckBox, 'PDFAcroCheckBox'],
    ]);
    assertIs(doc, 'doc', [[PDFDocument, 'PDFDocument']]);

    this.acroField = acroCheckBox;
    this.doc = doc;
  }
}